import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeletesystemPathParams:
    inventory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletesystemSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeletesystemRequest:
    path_params: DeletesystemPathParams = dataclasses.field()
    security: DeletesystemSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeletesystemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
