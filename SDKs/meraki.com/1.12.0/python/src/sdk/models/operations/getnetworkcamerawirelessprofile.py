import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCameraWirelessProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    wireless_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'wirelessProfileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCameraWirelessProfileRequest:
    path_params: GetNetworkCameraWirelessProfilePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCameraWirelessProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_camera_wireless_profile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
