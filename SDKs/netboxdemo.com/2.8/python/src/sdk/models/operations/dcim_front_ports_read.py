import dataclasses
from typing import Optional
from ..shared import frontport as shared_frontport


@dataclasses.dataclass
class DcimFrontPortsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimFrontPortsReadRequest:
    path_params: DcimFrontPortsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimFrontPortsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    front_port: Optional[shared_frontport.FrontPort] = dataclasses.field(default=None)
    
