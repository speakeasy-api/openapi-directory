import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1alpha1dimensionvalue as shared_googleplaydeveloperreportingv1alpha1dimensionvalue
from ..shared import googleplaydeveloperreportingv1alpha1metricvalue as shared_googleplaydeveloperreportingv1alpha1metricvalue
from ..shared import googletypedatetime as shared_googletypedatetime

class GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum(str, Enum):
    AGGREGATION_PERIOD_UNSPECIFIED = "AGGREGATION_PERIOD_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1alpha1MetricsRow:
    r"""GooglePlayDeveloperReportingV1alpha1MetricsRow
    Represents a row of dimensions and metrics.
    """
    
    aggregation_period: Optional[GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPeriod') }})
    dimensions: Optional[list[shared_googleplaydeveloperreportingv1alpha1dimensionvalue.GooglePlayDeveloperReportingV1alpha1DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metrics: Optional[list[shared_googleplaydeveloperreportingv1alpha1metricvalue.GooglePlayDeveloperReportingV1alpha1MetricValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    start_time: Optional[shared_googletypedatetime.GoogleTypeDateTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
