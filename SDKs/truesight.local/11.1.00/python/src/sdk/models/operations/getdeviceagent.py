import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDeviceAgentPathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceAgentRequest:
    path_params: GetDeviceAgentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
