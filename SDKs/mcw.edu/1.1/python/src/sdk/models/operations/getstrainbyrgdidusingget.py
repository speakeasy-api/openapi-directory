import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetStrainByRgdIDUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStrainByRgdIDUsingGetRequest:
    path_params: GetStrainByRgdIDUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStrainByRgdIDUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
