import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actor as shared_actor
from ..shared import actiondetail as shared_actiondetail
from ..shared import target as shared_target
from ..shared import timerange as shared_timerange


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    Information about the action.
    """
    
    actor: Optional[shared_actor.Actor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    detail: Optional[shared_actiondetail.ActionDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    target: Optional[shared_target.Target] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    time_range: Optional[shared_timerange.TimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
