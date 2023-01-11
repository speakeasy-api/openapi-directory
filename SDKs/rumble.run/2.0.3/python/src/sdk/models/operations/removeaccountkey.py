import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveAccountKeyPathParams:
    key_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveAccountKeySecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveAccountKeyRequest:
    path_params: RemoveAccountKeyPathParams = dataclasses.field()
    security: RemoveAccountKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveAccountKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
