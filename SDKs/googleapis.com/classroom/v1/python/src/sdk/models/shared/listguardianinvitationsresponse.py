import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guardianinvitation as shared_guardianinvitation


@dataclass_json
@dataclasses.dataclass
class ListGuardianInvitationsResponse:
    r"""ListGuardianInvitationsResponse
    Response when listing guardian invitations.
    """
    
    guardian_invitations: Optional[list[shared_guardianinvitation.GuardianInvitation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guardianInvitations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
