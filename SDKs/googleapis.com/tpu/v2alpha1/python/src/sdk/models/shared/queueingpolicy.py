import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interval as shared_interval


@dataclass_json
@dataclasses.dataclass
class QueueingPolicy:
    r"""QueueingPolicy
    Defines the policy of the QueuedRequest.
    """
    
    valid_after_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAfterDuration') }})
    valid_after_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAfterTime') }})
    valid_interval: Optional[shared_interval.Interval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validInterval') }})
    valid_until_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntilDuration') }})
    valid_until_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntilTime') }})
    
