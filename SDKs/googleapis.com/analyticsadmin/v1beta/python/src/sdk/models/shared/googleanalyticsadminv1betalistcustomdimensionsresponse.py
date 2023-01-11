import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betacustomdimension as shared_googleanalyticsadminv1betacustomdimension


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListCustomDimensionsResponse:
    r"""GoogleAnalyticsAdminV1betaListCustomDimensionsResponse
    Response message for ListCustomDimensions RPC.
    """
    
    custom_dimensions: Optional[list[shared_googleanalyticsadminv1betacustomdimension.GoogleAnalyticsAdminV1betaCustomDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDimensions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
