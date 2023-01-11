import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCameraWirelessProfilesPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCameraWirelessProfilesRequest:
    path_params: GetDeviceCameraWirelessProfilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraWirelessProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_wireless_profiles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
