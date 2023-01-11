import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOntolLabelerResourceQueryParams:
    id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOntolLabelerResourceRequest:
    query_params: GetOntolLabelerResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOntolLabelerResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
