import dataclasses
from typing import Optional


@dataclasses.dataclass
class SearchPathwaysUsingGetPathParams:
    search_string: str = dataclasses.field(metadata={'path_param': { 'field_name': 'searchString', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchPathwaysUsingGetRequest:
    path_params: SearchPathwaysUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchPathwaysUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
