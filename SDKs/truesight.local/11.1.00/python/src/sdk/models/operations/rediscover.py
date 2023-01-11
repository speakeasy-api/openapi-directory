import dataclasses
from typing import Optional


@dataclasses.dataclass
class RediscoverPathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RediscoverRequest:
    path_params: RediscoverPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RediscoverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
