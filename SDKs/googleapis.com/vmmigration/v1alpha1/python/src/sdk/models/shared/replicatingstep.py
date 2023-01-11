import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReplicatingStep:
    r"""ReplicatingStep
    ReplicatingStep contains specific step details.
    """
    
    last_thirty_minutes_average_bytes_per_second: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastThirtyMinutesAverageBytesPerSecond') }})
    last_two_minutes_average_bytes_per_second: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTwoMinutesAverageBytesPerSecond') }})
    replicated_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicatedBytes') }})
    total_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalBytes') }})
    
