import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingprofile as shared_billingprofile


@dataclass_json
@dataclasses.dataclass
class BillingProfilesListResponse:
    r"""BillingProfilesListResponse
    Billing profile List Response
    """
    
    billing_profiles: Optional[list[shared_billingprofile.BillingProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingProfiles') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
