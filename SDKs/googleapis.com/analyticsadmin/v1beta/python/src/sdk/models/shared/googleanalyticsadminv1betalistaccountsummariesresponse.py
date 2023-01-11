import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betaaccountsummary as shared_googleanalyticsadminv1betaaccountsummary


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListAccountSummariesResponse:
    r"""GoogleAnalyticsAdminV1betaListAccountSummariesResponse
    Response message for ListAccountSummaries RPC.
    """
    
    account_summaries: Optional[list[shared_googleanalyticsadminv1betaaccountsummary.GoogleAnalyticsAdminV1betaAccountSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountSummaries') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
