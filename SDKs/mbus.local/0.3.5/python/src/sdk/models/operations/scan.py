import dataclasses
from typing import Optional


@dataclasses.dataclass
class ScanPathParams:
    baudrate: int = dataclasses.field(metadata={'path_param': { 'field_name': 'baudrate', 'style': 'simple', 'explode': False }})
    device: str = dataclasses.field(metadata={'path_param': { 'field_name': 'device', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScanRequest:
    path_params: ScanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    slaves: Optional[str] = dataclasses.field(default=None)
    text_error: Optional[str] = dataclasses.field(default=None)
    
