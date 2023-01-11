import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessRfProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rf_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rfProfileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessRfProfileRequest:
    path_params: GetNetworkWirelessRfProfilePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessRfProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_rf_profile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
