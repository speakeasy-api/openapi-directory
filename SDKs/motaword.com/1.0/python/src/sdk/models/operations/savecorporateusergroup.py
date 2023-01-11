import dataclasses
from typing import Optional
from ..shared import usergroup as shared_usergroup


@dataclasses.dataclass
class SaveCorporateUserGroupRequest:
    request: shared_usergroup.UserGroup = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SaveCorporateUserGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_group: Optional[shared_usergroup.UserGroup] = dataclasses.field(default=None)
    
