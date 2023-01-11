import dataclasses
from typing import Optional
from ..shared import groupresult as shared_groupresult


@dataclasses.dataclass
class GetGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupRequest:
    path_params: GetGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_result: Optional[shared_groupresult.GroupResult] = dataclasses.field(default=None)
    
