import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betaconversionevent as shared_googleanalyticsadminv1betaconversionevent


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListConversionEventsResponse:
    r"""GoogleAnalyticsAdminV1betaListConversionEventsResponse
    Response message for ListConversionEvents RPC.
    """
    
    conversion_events: Optional[list[shared_googleanalyticsadminv1betaconversionevent.GoogleAnalyticsAdminV1betaConversionEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionEvents') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
