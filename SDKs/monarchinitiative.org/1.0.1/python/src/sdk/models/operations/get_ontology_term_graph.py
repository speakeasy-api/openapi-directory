import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetOntologyTermGraphPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetOntologyTermGraphGraphTypeEnum(str, Enum):
    TOPOLOGY_GRAPH = "topology_graph"
    REGULATES_TRANSITIVITY_GRAPH = "regulates_transitivity_graph"
    NEIGHBORHOOD_GRAPH = "neighborhood_graph"
    NEIGHBORHOOD_LIMITED_GRAPH = "neighborhood_limited_graph"


@dataclasses.dataclass
class GetOntologyTermGraphQueryParams:
    graph_type: Optional[GetOntologyTermGraphGraphTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'graph_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOntologyTermGraphRequest:
    path_params: GetOntologyTermGraphPathParams = dataclasses.field()
    query_params: GetOntologyTermGraphQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOntologyTermGraphResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
