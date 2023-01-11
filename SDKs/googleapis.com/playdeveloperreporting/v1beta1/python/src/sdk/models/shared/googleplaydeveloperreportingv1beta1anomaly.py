import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1beta1dimensionvalue as shared_googleplaydeveloperreportingv1beta1dimensionvalue
from ..shared import googleplaydeveloperreportingv1beta1metricvalue as shared_googleplaydeveloperreportingv1beta1metricvalue
from ..shared import googleplaydeveloperreportingv1beta1timelinespec as shared_googleplaydeveloperreportingv1beta1timelinespec


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1beta1Anomaly:
    r"""GooglePlayDeveloperReportingV1beta1Anomaly
    Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
    """
    
    dimensions: Optional[list[shared_googleplaydeveloperreportingv1beta1dimensionvalue.GooglePlayDeveloperReportingV1beta1DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metric: Optional[shared_googleplaydeveloperreportingv1beta1metricvalue.GooglePlayDeveloperReportingV1beta1MetricValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    metric_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricSet') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timeline_spec: Optional[shared_googleplaydeveloperreportingv1beta1timelinespec.GooglePlayDeveloperReportingV1beta1TimelineSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timelineSpec') }})
    
