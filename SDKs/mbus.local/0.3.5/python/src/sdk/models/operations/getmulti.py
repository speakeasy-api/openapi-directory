import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMultiPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    baudrate: int = dataclasses.field(metadata={'path_param': { 'field_name': 'baudrate', 'style': 'simple', 'explode': False }})
    device: str = dataclasses.field(metadata={'path_param': { 'field_name': 'device', 'style': 'simple', 'explode': False }})
    maxframes: int = dataclasses.field(metadata={'path_param': { 'field_name': 'maxframes', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMultiRequest:
    path_params: GetMultiPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMultiResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    mbus_data: Optional[str] = dataclasses.field(default=None)
    text_error: Optional[str] = dataclasses.field(default=None)
    
