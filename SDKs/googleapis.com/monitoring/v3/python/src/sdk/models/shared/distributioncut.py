import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlemonitoringv3range as shared_googlemonitoringv3range


@dataclass_json
@dataclasses.dataclass
class DistributionCut:
    r"""DistributionCut
    A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max.
    """
    
    distribution_filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionFilter') }})
    range: Optional[shared_googlemonitoringv3range.GoogleMonitoringV3Range] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
