import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessSsidsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessSsidsRequest:
    path_params: GetNetworkWirelessSsidsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessSsidsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_ssids_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
