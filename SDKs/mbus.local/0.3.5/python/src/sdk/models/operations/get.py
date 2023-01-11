import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    baudrate: int = dataclasses.field(metadata={'path_param': { 'field_name': 'baudrate', 'style': 'simple', 'explode': False }})
    device: str = dataclasses.field(metadata={'path_param': { 'field_name': 'device', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRequest:
    path_params: GetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    mbus_data: Optional[str] = dataclasses.field(default=None)
    text_error: Optional[str] = dataclasses.field(default=None)
    
