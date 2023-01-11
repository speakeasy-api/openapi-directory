import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userlist as shared_userlist


@dataclass_json
@dataclasses.dataclass
class ListUserListsResponse:
    r"""ListUserListsResponse
    The list user list response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_lists: Optional[list[shared_userlist.UserList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLists') }})
    
