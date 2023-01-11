import dataclasses
from typing import Optional
from ..shared import groupeditrequest as shared_groupeditrequest
from ..shared import groupresult as shared_groupresult


@dataclasses.dataclass
class EditGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditGroupRequest:
    path_params: EditGroupPathParams = dataclasses.field()
    request: shared_groupeditrequest.GroupEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_result: Optional[shared_groupresult.GroupResult] = dataclasses.field(default=None)
    
