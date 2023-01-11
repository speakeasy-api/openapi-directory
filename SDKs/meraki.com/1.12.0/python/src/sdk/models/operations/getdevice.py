import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDevicePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceRequest:
    path_params: GetDevicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
