import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMgiMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMgiMappingUsingGetRequest:
    path_params: GetMgiMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMgiMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
