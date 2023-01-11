import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessSsidHotspot20PathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessSsidHotspot20Request:
    path_params: GetNetworkWirelessSsidHotspot20PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessSsidHotspot20Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_ssid_hotspot20_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
