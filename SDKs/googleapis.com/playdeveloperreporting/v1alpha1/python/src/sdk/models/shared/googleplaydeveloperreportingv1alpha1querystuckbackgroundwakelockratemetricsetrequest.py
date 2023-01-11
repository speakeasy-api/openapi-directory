import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1alpha1timelinespec as shared_googleplaydeveloperreportingv1alpha1timelinespec


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest:
    r"""GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest
    Request message for QueryStuckBackgroundWakelockRateMetricSet.
    """
    
    dimensions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    metrics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    timeline_spec: Optional[shared_googleplaydeveloperreportingv1alpha1timelinespec.GooglePlayDeveloperReportingV1alpha1TimelineSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timelineSpec') }})
    
