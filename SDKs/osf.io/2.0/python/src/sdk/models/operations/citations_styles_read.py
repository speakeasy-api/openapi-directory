import dataclasses
from typing import Optional


@dataclasses.dataclass
class CitationsStylesReadPathParams:
    style_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CitationsStylesReadRequest:
    path_params: CitationsStylesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CitationsStylesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
