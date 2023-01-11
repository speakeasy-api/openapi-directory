import dataclasses
from typing import Optional
from ..shared import usergrouplist as shared_usergrouplist


@dataclasses.dataclass
class GetThisUserGroupsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetThisUserGroupsRequest:
    path_params: GetThisUserGroupsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetThisUserGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_group_list: Optional[shared_usergrouplist.UserGroupList] = dataclasses.field(default=None)
    
