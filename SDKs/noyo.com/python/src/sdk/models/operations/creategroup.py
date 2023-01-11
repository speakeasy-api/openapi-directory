import dataclasses
from typing import Optional
from ..shared import groupcreaterequest as shared_groupcreaterequest
from ..shared import groupresult as shared_groupresult


@dataclasses.dataclass
class CreateGroupRequest:
    request: shared_groupcreaterequest.GroupCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_result: Optional[shared_groupresult.GroupResult] = dataclasses.field(default=None)
    
