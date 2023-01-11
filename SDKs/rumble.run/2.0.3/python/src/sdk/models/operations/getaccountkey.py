import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAccountKeyPathParams:
    key_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountKeySecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountKeyRequest:
    path_params: GetAccountKeyPathParams = dataclasses.field()
    security: GetAccountKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
