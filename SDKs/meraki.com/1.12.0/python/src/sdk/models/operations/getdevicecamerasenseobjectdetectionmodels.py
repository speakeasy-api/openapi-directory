import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCameraSenseObjectDetectionModelsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCameraSenseObjectDetectionModelsRequest:
    path_params: GetDeviceCameraSenseObjectDetectionModelsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraSenseObjectDetectionModelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_sense_object_detection_models_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
