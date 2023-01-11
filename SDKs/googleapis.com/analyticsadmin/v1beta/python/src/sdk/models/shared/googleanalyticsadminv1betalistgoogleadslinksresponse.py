import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betagoogleadslink as shared_googleanalyticsadminv1betagoogleadslink


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse:
    r"""GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse
    Response message for ListGoogleAdsLinks RPC.
    """
    
    google_ads_links: Optional[list[shared_googleanalyticsadminv1betagoogleadslink.GoogleAnalyticsAdminV1betaGoogleAdsLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAdsLinks') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
