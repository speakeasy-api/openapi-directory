import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessSsidPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessSsidRequest:
    path_params: GetNetworkWirelessSsidPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessSsidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_ssid_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
