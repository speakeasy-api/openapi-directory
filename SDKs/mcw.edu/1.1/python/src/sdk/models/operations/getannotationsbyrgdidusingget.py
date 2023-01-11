import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAnnotationsByRgdIDUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnnotationsByRgdIDUsingGetRequest:
    path_params: GetAnnotationsByRgdIDUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotationsByRgdIDUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
