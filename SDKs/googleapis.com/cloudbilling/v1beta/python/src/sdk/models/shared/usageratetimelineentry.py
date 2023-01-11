import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import estimationtimepoint as shared_estimationtimepoint


@dataclass_json
@dataclasses.dataclass
class UsageRateTimelineEntry:
    r"""UsageRateTimelineEntry
    A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
    """
    
    effective_time: Optional[shared_estimationtimepoint.EstimationTimePoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTime') }})
    usage_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageRate') }})
    
