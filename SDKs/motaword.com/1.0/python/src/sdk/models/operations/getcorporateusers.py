import dataclasses
from typing import Optional
from ..shared import userlist as shared_userlist


@dataclasses.dataclass
class GetCorporateUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_list: Optional[shared_userlist.UserList] = dataclasses.field(default=None)
    
