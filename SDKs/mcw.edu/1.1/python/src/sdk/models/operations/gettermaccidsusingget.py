import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTermAccIdsUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTermAccIdsUsingGetRequest:
    path_params: GetTermAccIdsUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTermAccIdsUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
