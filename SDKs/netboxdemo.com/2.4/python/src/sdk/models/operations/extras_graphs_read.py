import dataclasses
from typing import Optional
from ..shared import graph as shared_graph


@dataclasses.dataclass
class ExtrasGraphsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasGraphsReadRequest:
    path_params: ExtrasGraphsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasGraphsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph: Optional[shared_graph.Graph] = dataclasses.field(default=None)
    
