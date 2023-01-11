import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import latencypercentile as shared_latencypercentile


@dataclass_json
@dataclasses.dataclass
class LatencyDistribution:
    r"""LatencyDistribution
    Describes measured latency distribution.
    """
    
    latency_percentiles: Optional[list[shared_latencypercentile.LatencyPercentile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latencyPercentiles') }})
    
