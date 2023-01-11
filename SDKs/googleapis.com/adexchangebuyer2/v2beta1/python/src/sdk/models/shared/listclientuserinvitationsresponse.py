import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientuserinvitation as shared_clientuserinvitation


@dataclass_json
@dataclasses.dataclass
class ListClientUserInvitationsResponse:
    invitations: Optional[list[shared_clientuserinvitation.ClientUserInvitation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
