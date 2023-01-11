import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCameraVideoSettingsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCameraVideoSettingsRequest:
    path_params: GetDeviceCameraVideoSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraVideoSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_video_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
