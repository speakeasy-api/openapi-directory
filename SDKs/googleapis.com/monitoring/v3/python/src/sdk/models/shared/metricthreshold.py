import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregation as shared_aggregation
from ..shared import forecastoptions as shared_forecastoptions
from ..shared import trigger as shared_trigger

class MetricThresholdComparisonEnum(str, Enum):
    COMPARISON_UNSPECIFIED = "COMPARISON_UNSPECIFIED"
    COMPARISON_GT = "COMPARISON_GT"
    COMPARISON_GE = "COMPARISON_GE"
    COMPARISON_LT = "COMPARISON_LT"
    COMPARISON_LE = "COMPARISON_LE"
    COMPARISON_EQ = "COMPARISON_EQ"
    COMPARISON_NE = "COMPARISON_NE"

class MetricThresholdEvaluationMissingDataEnum(str, Enum):
    EVALUATION_MISSING_DATA_UNSPECIFIED = "EVALUATION_MISSING_DATA_UNSPECIFIED"
    EVALUATION_MISSING_DATA_INACTIVE = "EVALUATION_MISSING_DATA_INACTIVE"
    EVALUATION_MISSING_DATA_ACTIVE = "EVALUATION_MISSING_DATA_ACTIVE"
    EVALUATION_MISSING_DATA_NO_OP = "EVALUATION_MISSING_DATA_NO_OP"


@dataclass_json
@dataclasses.dataclass
class MetricThreshold:
    r"""MetricThreshold
    A condition type that compares a collection of time series against a threshold.
    """
    
    aggregations: Optional[list[shared_aggregation.Aggregation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregations') }})
    comparison: Optional[MetricThresholdComparisonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparison') }})
    denominator_aggregations: Optional[list[shared_aggregation.Aggregation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denominatorAggregations') }})
    denominator_filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denominatorFilter') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    evaluation_missing_data: Optional[MetricThresholdEvaluationMissingDataEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMissingData') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    forecast_options: Optional[shared_forecastoptions.ForecastOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecastOptions') }})
    threshold_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdValue') }})
    trigger: Optional[shared_trigger.Trigger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
