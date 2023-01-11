import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGeneByRgdIDUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeneByRgdIDUsingGetRequest:
    path_params: GetGeneByRgdIDUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeneByRgdIDUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
