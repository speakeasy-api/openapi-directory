import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveWirelessLanPathParams:
    wireless_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'wireless_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveWirelessLanSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveWirelessLanRequest:
    path_params: RemoveWirelessLanPathParams = dataclasses.field()
    security: RemoveWirelessLanSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveWirelessLanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
