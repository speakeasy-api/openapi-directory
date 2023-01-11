import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTermUsingGetPathParams:
    acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTermUsingGetRequest:
    path_params: GetTermUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTermUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
