import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAccountUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountUserSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountUserRequest:
    path_params: GetAccountUserPathParams = dataclasses.field()
    security: GetAccountUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
