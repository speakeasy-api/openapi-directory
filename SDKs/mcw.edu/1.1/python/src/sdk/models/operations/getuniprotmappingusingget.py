import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetUniProtMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUniProtMappingUsingGetRequest:
    path_params: GetUniProtMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUniProtMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
