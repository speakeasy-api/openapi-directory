import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCameraAnalyticsLivePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCameraAnalyticsLiveRequest:
    path_params: GetDeviceCameraAnalyticsLivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraAnalyticsLiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_analytics_live_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
