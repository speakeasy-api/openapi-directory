import dataclasses
from typing import Optional
from ..shared import association as shared_association


@dataclasses.dataclass
class GetSparqlQueryPathParams:
    query: str = dataclasses.field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSparqlQueryRequest:
    path_params: GetSparqlQueryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSparqlQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associations: Optional[list[shared_association.Association]] = dataclasses.field(default=None)
    
