import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleadshomeserviceslocalservicesv1accountreport as shared_googleadshomeserviceslocalservicesv1accountreport


@dataclass_json
@dataclasses.dataclass
class GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse:
    r"""GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
    A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
    """
    
    account_reports: Optional[list[shared_googleadshomeserviceslocalservicesv1accountreport.GoogleAdsHomeservicesLocalservicesV1AccountReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountReports') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
