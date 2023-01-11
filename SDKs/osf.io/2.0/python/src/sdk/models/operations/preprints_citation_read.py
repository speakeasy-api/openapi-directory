import dataclasses
from typing import Optional


@dataclasses.dataclass
class PreprintsCitationReadPathParams:
    preprint_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    style_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PreprintsCitationReadRequest:
    path_params: PreprintsCitationReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PreprintsCitationReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
