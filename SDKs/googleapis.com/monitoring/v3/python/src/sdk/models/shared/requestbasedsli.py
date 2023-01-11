import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distributioncut as shared_distributioncut
from ..shared import timeseriesratio as shared_timeseriesratio


@dataclass_json
@dataclasses.dataclass
class RequestBasedSli:
    r"""RequestBasedSli
    Service Level Indicators for which atomic units of service are counted directly.
    """
    
    distribution_cut: Optional[shared_distributioncut.DistributionCut] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionCut') }})
    good_total_ratio: Optional[shared_timeseriesratio.TimeSeriesRatio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goodTotalRatio') }})
    
