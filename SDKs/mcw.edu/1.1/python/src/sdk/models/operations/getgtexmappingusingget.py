import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGtexMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGtexMappingUsingGetRequest:
    path_params: GetGtexMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGtexMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
