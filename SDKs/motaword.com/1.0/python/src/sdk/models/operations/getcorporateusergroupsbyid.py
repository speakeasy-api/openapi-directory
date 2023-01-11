import dataclasses
from typing import Optional
from ..shared import usergrouplist as shared_usergrouplist


@dataclasses.dataclass
class GetCorporateUserGroupsByIDPathParams:
    corporate_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'corporateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCorporateUserGroupsByIDRequest:
    path_params: GetCorporateUserGroupsByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCorporateUserGroupsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_group_list: Optional[shared_usergrouplist.UserGroupList] = dataclasses.field(default=None)
    
