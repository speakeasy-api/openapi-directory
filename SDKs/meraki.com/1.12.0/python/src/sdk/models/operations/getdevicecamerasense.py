import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCameraSensePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCameraSenseRequest:
    path_params: GetDeviceCameraSensePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraSenseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_sense_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
