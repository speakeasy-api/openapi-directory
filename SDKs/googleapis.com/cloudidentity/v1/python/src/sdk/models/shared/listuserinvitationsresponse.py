import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userinvitation as shared_userinvitation


@dataclass_json
@dataclasses.dataclass
class ListUserInvitationsResponse:
    r"""ListUserInvitationsResponse
    Response message for UserInvitation listing request.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_invitations: Optional[list[shared_userinvitation.UserInvitation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInvitations') }})
    
