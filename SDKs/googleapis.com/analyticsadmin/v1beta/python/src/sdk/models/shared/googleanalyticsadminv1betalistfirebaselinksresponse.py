import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betafirebaselink as shared_googleanalyticsadminv1betafirebaselink


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListFirebaseLinksResponse:
    r"""GoogleAnalyticsAdminV1betaListFirebaseLinksResponse
    Response message for ListFirebaseLinks RPC
    """
    
    firebase_links: Optional[list[shared_googleanalyticsadminv1betafirebaselink.GoogleAnalyticsAdminV1betaFirebaseLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseLinks') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
