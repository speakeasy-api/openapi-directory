import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGeneOrthologsUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeneOrthologsUsingGetRequest:
    path_params: GetGeneOrthologsUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeneOrthologsUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
