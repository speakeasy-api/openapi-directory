import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAnnotsByRefrerenceUsingGetPathParams:
    ref_rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'refRgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnnotsByRefrerenceUsingGetRequest:
    path_params: GetAnnotsByRefrerenceUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotsByRefrerenceUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
