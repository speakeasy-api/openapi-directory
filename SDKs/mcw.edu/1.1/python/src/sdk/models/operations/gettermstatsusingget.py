import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTermStatsUsingGetPathParams:
    acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    filter_acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'filterAccId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTermStatsUsingGetRequest:
    path_params: GetTermStatsUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTermStatsUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
