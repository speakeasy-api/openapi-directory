import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1alpha1metricsrow as shared_googleplaydeveloperreportingv1alpha1metricsrow


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse:
    r"""GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse
    Response message for QueryStuckBackgroundWakelockRateMetricSet.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rows: Optional[list[shared_googleplaydeveloperreportingv1alpha1metricsrow.GooglePlayDeveloperReportingV1alpha1MetricsRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
