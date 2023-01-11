import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeinterval as shared_timeinterval


@dataclass_json
@dataclasses.dataclass
class LocalPostEvent:
    r"""LocalPostEvent
    All the information pertaining to an event featured in a local post.
    """
    
    schedule: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
