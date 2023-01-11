import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import wireless as shared_wireless


@dataclasses.dataclass
class GetWirelessLanPathParams:
    wireless_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'wireless_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWirelessLanSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetWirelessLanRequest:
    path_params: GetWirelessLanPathParams = dataclasses.field()
    security: GetWirelessLanSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWirelessLanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wireless: Optional[shared_wireless.Wireless] = dataclasses.field(default=None)
    
