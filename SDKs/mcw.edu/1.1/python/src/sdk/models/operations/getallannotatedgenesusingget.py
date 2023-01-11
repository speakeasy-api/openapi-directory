import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAllAnnotatedGenesUsingGetPathParams:
    acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllAnnotatedGenesUsingGetRequest:
    path_params: GetAllAnnotatedGenesUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllAnnotatedGenesUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
