import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDeviceMonitorsPathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceMonitorsRequest:
    path_params: GetDeviceMonitorsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceMonitorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
