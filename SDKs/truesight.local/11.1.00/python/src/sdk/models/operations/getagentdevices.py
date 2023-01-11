import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAgentDevicesPathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentDevicesRequest:
    path_params: GetAgentDevicesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
