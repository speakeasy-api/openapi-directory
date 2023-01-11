import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import performancethreshold as shared_performancethreshold
from ..shared import metricrange as shared_metricrange


@dataclass_json
@dataclasses.dataclass
class WindowsBasedSli:
    r"""WindowsBasedSli
    A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
    """
    
    good_bad_metric_filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goodBadMetricFilter') }})
    good_total_ratio_threshold: Optional[shared_performancethreshold.PerformanceThreshold] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goodTotalRatioThreshold') }})
    metric_mean_in_range: Optional[shared_metricrange.MetricRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricMeanInRange') }})
    metric_sum_in_range: Optional[shared_metricrange.MetricRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricSumInRange') }})
    window_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowPeriod') }})
    
