import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betaaccount as shared_googleanalyticsadminv1betaaccount


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput:
    r"""GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestInput
    Request message for ProvisionAccountTicket RPC.
    """
    
    account: Optional[shared_googleanalyticsadminv1betaaccount.GoogleAnalyticsAdminV1betaAccountInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    
