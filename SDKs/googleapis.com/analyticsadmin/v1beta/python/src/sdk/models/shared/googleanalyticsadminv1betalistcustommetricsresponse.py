import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betacustommetric as shared_googleanalyticsadminv1betacustommetric


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListCustomMetricsResponse:
    r"""GoogleAnalyticsAdminV1betaListCustomMetricsResponse
    Response message for ListCustomMetrics RPC.
    """
    
    custom_metrics: Optional[list[shared_googleanalyticsadminv1betacustommetric.GoogleAnalyticsAdminV1betaCustomMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetrics') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
