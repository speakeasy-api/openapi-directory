import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criteria as shared_criteria
from ..shared import timeinterval as shared_timeinterval


@dataclass_json
@dataclasses.dataclass
class Snooze:
    r"""Snooze
    A Snooze will prevent any alerts from being opened, and close any that are already open. The Snooze will work on alerts that match the criteria defined in the Snooze. The Snooze will be active from interval.start_time through interval.end_time.
    """
    
    criteria: Optional[shared_criteria.Criteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    interval: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
