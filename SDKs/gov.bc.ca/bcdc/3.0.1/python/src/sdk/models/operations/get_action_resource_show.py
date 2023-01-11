import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionResourceShowQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_tracking: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_tracking', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionResourceShowRequest:
    query_params: GetActionResourceShowQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionResourceShowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
