import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDevicePathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceRequest:
    path_params: GetDevicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
