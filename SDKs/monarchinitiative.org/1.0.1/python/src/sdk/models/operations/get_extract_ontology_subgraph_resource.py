import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetExtractOntologySubgraphResourcePathParams:
    node: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node', 'style': 'simple', 'explode': False }})
    ontology: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ontology', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExtractOntologySubgraphResourceQueryParams:
    cnode: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cnode', 'style': 'form', 'explode': True }})
    include_ancestors: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_ancestors', 'style': 'form', 'explode': True }})
    include_descendants: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_descendants', 'style': 'form', 'explode': True }})
    include_meta: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_meta', 'style': 'form', 'explode': True }})
    relation: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relation', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExtractOntologySubgraphResourceRequest:
    path_params: GetExtractOntologySubgraphResourcePathParams = dataclasses.field()
    query_params: GetExtractOntologySubgraphResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExtractOntologySubgraphResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
