import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deleted as shared_deleted


@dataclasses.dataclass
class DeleteAPIKeyPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAPIKeySecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteAPIKeyRequest:
    path_params: DeleteAPIKeyPathParams = dataclasses.field()
    security: DeleteAPIKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAPIKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deleted: Optional[shared_deleted.Deleted] = dataclasses.field(default=None)
    
