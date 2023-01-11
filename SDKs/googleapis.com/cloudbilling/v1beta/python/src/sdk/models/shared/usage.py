import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usageratetimeline as shared_usageratetimeline


@dataclass_json
@dataclasses.dataclass
class Usage:
    r"""Usage
    An amount of usage over a time frame.
    """
    
    usage_rate_timeline: Optional[shared_usageratetimeline.UsageRateTimeline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageRateTimeline') }})
    
