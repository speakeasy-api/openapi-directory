import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGeneAllelesUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeneAllelesUsingGetRequest:
    path_params: GetGeneAllelesUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeneAllelesUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
