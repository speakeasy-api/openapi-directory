import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetModelQueryQueryParams:
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor', 'style': 'form', 'explode': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModelQueryRequest:
    query_params: GetModelQueryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModelQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
