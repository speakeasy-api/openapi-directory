import dataclasses
from typing import Optional
from enum import Enum
from ..shared import graph as shared_graph


@dataclasses.dataclass
class GetEdgeResourcePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetEdgeResourceDirectionEnum(str, Enum):
    INCOMING = "INCOMING"
    OUTGOING = "OUTGOING"
    BOTH = "BOTH"

class GetEdgeResourceGraphEnum(str, Enum):
    DATA = "data"
    ONTOLOGY = "ontology"


@dataclasses.dataclass
class GetEdgeResourceQueryParams:
    depth: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'depth', 'style': 'form', 'explode': True }})
    direction: Optional[GetEdgeResourceDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    entail: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entail', 'style': 'form', 'explode': True }})
    graph: Optional[GetEdgeResourceGraphEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'graph', 'style': 'form', 'explode': True }})
    relationship_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relationship_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEdgeResourceRequest:
    path_params: GetEdgeResourcePathParams = dataclasses.field()
    query_params: GetEdgeResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEdgeResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graphs: Optional[list[shared_graph.Graph]] = dataclasses.field(default=None)
    
