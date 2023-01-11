import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveAccountUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveAccountUserSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveAccountUserRequest:
    path_params: RemoveAccountUserPathParams = dataclasses.field()
    security: RemoveAccountUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveAccountUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
