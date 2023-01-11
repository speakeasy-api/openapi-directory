import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkCameraWirelessProfilesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkCameraWirelessProfilesRequest:
    path_params: GetNetworkCameraWirelessProfilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkCameraWirelessProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_camera_wireless_profiles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
