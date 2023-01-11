import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guestpolicy as shared_guestpolicy


@dataclass_json
@dataclasses.dataclass
class ListGuestPoliciesResponse:
    r"""ListGuestPoliciesResponse
    A response message for listing guest policies.
    """
    
    guest_policies: Optional[list[shared_guestpolicy.GuestPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestPolicies') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
