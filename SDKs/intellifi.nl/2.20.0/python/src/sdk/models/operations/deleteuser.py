import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class DeleteUserPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserSecurity:
    cookie_sid: shared_security.SchemeCookieSid = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclasses.dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = dataclasses.field()
    security: DeleteUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
