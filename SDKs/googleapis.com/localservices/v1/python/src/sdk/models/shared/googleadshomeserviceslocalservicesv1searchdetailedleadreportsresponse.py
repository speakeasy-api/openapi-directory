import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleadshomeserviceslocalservicesv1detailedleadreport as shared_googleadshomeserviceslocalservicesv1detailedleadreport


@dataclass_json
@dataclasses.dataclass
class GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse:
    r"""GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse
    A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
    """
    
    detailed_lead_reports: Optional[list[shared_googleadshomeserviceslocalservicesv1detailedleadreport.GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailedLeadReports') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
