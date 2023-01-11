import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGeneByMapKeyUsingGetPathParams:
    map_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeneByMapKeyUsingGetRequest:
    path_params: GetGeneByMapKeyUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeneByMapKeyUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
