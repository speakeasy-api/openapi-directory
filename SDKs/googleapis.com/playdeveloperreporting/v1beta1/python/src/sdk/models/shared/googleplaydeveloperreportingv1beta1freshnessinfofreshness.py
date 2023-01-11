import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedatetime as shared_googletypedatetime

class GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum(str, Enum):
    AGGREGATION_PERIOD_UNSPECIFIED = "AGGREGATION_PERIOD_UNSPECIFIED"
    HOURLY = "HOURLY"
    DAILY = "DAILY"


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness:
    r"""GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness
    Information about data freshness for a single aggregation period.
    """
    
    aggregation_period: Optional[GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPeriod') }})
    latest_end_time: Optional[shared_googletypedatetime.GoogleTypeDateTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestEndTime') }})
    
