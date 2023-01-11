import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betaaccount as shared_googleanalyticsadminv1betaaccount


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListAccountsResponse:
    r"""GoogleAnalyticsAdminV1betaListAccountsResponse
    Request message for ListAccounts RPC.
    """
    
    accounts: Optional[list[shared_googleanalyticsadminv1betaaccount.GoogleAnalyticsAdminV1betaAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
