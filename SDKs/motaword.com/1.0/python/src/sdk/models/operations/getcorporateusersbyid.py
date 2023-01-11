import dataclasses
from typing import Optional
from ..shared import userlist as shared_userlist


@dataclasses.dataclass
class GetCorporateUsersByIDPathParams:
    corporate_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'corporateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCorporateUsersByIDRequest:
    path_params: GetCorporateUsersByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCorporateUsersByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_list: Optional[shared_userlist.UserList] = dataclasses.field(default=None)
    
