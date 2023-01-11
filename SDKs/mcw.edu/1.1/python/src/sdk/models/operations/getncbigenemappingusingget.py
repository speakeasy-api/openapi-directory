import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetNcbiGeneMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNcbiGeneMappingUsingGetRequest:
    path_params: GetNcbiGeneMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNcbiGeneMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
