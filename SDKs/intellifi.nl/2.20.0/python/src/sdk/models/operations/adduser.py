import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import user as shared_user
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddUserSecurity:
    cookie_sid: shared_security.SchemeCookieSid = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclasses.dataclass
class AddUserRequest:
    request: shared_user.UserInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
