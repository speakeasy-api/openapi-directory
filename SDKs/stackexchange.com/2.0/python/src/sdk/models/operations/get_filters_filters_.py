import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetFiltersFiltersPathParams:
    filters: str = dataclasses.field(metadata={'path_param': { 'field_name': 'filters', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFiltersFiltersRequest:
    path_params: GetFiltersFiltersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFiltersFiltersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
