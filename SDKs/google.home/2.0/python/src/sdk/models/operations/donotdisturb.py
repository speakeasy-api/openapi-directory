import dataclasses
from typing import Optional
from ..shared import getcurrentstate as shared_getcurrentstate


@dataclasses.dataclass
class DoNotDisturbHeaders:
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DoNotDisturbRequest:
    headers: DoNotDisturbHeaders = dataclasses.field()
    

@dataclasses.dataclass
class DoNotDisturbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getcurrentstate: Optional[shared_getcurrentstate.Getcurrentstate] = dataclasses.field(default=None)
    
