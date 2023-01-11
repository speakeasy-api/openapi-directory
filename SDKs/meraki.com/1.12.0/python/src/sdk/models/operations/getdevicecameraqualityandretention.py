import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCameraQualityAndRetentionPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCameraQualityAndRetentionRequest:
    path_params: GetDeviceCameraQualityAndRetentionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraQualityAndRetentionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_quality_and_retention_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
