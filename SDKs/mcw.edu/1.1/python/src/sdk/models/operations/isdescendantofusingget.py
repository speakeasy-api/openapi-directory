import dataclasses
from typing import Optional


@dataclasses.dataclass
class IsDescendantOfUsingGetPathParams:
    acc_id1: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId1', 'style': 'simple', 'explode': False }})
    acc_id2: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId2', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IsDescendantOfUsingGetRequest:
    path_params: IsDescendantOfUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IsDescendantOfUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
