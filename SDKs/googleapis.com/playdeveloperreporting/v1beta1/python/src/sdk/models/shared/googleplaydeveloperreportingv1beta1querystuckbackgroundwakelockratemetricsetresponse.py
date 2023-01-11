import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1beta1metricsrow as shared_googleplaydeveloperreportingv1beta1metricsrow


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse:
    r"""GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse
    Response message for QueryStuckBackgroundWakelockRateMetricSet.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rows: Optional[list[shared_googleplaydeveloperreportingv1beta1metricsrow.GooglePlayDeveloperReportingV1beta1MetricsRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
