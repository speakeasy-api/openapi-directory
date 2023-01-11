import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOntDagsUsingGetPathParams:
    acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOntDagsUsingGetRequest:
    path_params: GetOntDagsUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOntDagsUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
