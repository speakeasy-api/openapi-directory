import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import user as shared_user


@dataclasses.dataclass
class GetUserByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserByIDSecurity:
    cookie_sid: shared_security.SchemeCookieSid = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclasses.dataclass
class GetUserByIDRequest:
    path_params: GetUserByIDPathParams = dataclasses.field()
    security: GetUserByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserByIDResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.UserOutput] = dataclasses.field(default=None)
    
