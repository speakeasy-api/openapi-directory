import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveKeySecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveKeyRequest:
    security: RemoveKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
