import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetPathParams:
    acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetRequest:
    path_params: GetAnnotationsByAccIDAndRgdIDUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
