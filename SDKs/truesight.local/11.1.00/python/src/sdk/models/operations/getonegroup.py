import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOneGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOneGroupRequest:
    path_params: GetOneGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
