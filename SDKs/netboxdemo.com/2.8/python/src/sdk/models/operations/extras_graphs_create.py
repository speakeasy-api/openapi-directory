import dataclasses
from typing import Optional
from ..shared import graph as shared_graph
from ..shared import graph as shared_graph


@dataclasses.dataclass
class ExtrasGraphsCreateRequest:
    request: shared_graph.GraphInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasGraphsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph: Optional[shared_graph.Graph] = dataclasses.field(default=None)
    
