import dataclasses
from typing import Optional
from ..shared import usergrouplist as shared_usergrouplist


@dataclasses.dataclass
class GetUserGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_group_list: Optional[shared_usergrouplist.UserGroupList] = dataclasses.field(default=None)
    
