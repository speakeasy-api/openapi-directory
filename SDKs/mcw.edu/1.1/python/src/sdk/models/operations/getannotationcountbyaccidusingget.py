import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAnnotationCountByAccIDUsingGetPathParams:
    acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    include_children: bool = dataclasses.field(metadata={'path_param': { 'field_name': 'includeChildren', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnnotationCountByAccIDUsingGetRequest:
    path_params: GetAnnotationCountByAccIDUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotationCountByAccIDUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
