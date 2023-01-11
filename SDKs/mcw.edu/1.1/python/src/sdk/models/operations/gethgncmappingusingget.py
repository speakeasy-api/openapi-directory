import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetHgncMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetHgncMappingUsingGetRequest:
    path_params: GetHgncMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHgncMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
