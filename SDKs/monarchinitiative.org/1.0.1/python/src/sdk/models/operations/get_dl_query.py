import dataclasses
from typing import Optional
from ..shared import association as shared_association


@dataclasses.dataclass
class GetDlQueryPathParams:
    query: str = dataclasses.field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDlQueryRequest:
    path_params: GetDlQueryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDlQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associations: Optional[list[shared_association.Association]] = dataclasses.field(default=None)
    
