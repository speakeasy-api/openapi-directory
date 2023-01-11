import dataclasses
from typing import Optional


@dataclasses.dataclass
class PreprintsReadPathParams:
    preprint_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PreprintsReadRequest:
    path_params: PreprintsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PreprintsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
