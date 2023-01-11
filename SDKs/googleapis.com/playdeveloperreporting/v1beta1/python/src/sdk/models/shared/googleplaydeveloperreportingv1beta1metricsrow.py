import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1beta1dimensionvalue as shared_googleplaydeveloperreportingv1beta1dimensionvalue
from ..shared import googleplaydeveloperreportingv1beta1metricvalue as shared_googleplaydeveloperreportingv1beta1metricvalue
from ..shared import googletypedatetime as shared_googletypedatetime

class GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum(str, Enum):
    AGGREGATION_PERIOD_UNSPECIFIED = "AGGREGATION_PERIOD_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1beta1MetricsRow:
    r"""GooglePlayDeveloperReportingV1beta1MetricsRow
    Represents a row of dimensions and metrics.
    """
    
    aggregation_period: Optional[GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPeriod') }})
    dimensions: Optional[list[shared_googleplaydeveloperreportingv1beta1dimensionvalue.GooglePlayDeveloperReportingV1beta1DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metrics: Optional[list[shared_googleplaydeveloperreportingv1beta1metricvalue.GooglePlayDeveloperReportingV1beta1MetricValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    start_time: Optional[shared_googletypedatetime.GoogleTypeDateTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
