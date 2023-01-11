import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionPackageSearchQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionPackageSearchRequest:
    query_params: GetActionPackageSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionPackageSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
