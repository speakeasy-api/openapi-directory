import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timedimension as shared_timedimension

class DimensionalMetricValueMetricOptionEnum(str, Enum):
    METRIC_OPTION_UNSPECIFIED = "METRIC_OPTION_UNSPECIFIED"
    AGGREGATED_TOTAL = "AGGREGATED_TOTAL"
    AGGREGATED_DAILY = "AGGREGATED_DAILY"
    BREAKDOWN_DAY_OF_WEEK = "BREAKDOWN_DAY_OF_WEEK"
    BREAKDOWN_HOUR_OF_DAY = "BREAKDOWN_HOUR_OF_DAY"


@dataclass_json
@dataclasses.dataclass
class DimensionalMetricValue:
    r"""DimensionalMetricValue
    A value for a single metric with a given time dimension.
    """
    
    metric_option: Optional[DimensionalMetricValueMetricOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricOption') }})
    time_dimension: Optional[shared_timedimension.TimeDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeDimension') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
