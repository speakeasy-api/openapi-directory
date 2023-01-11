import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PausedStateContext:
    r"""PausedStateContext
    Information specific to a subscription in paused state.
    """
    
    auto_resume_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoResumeTime') }})
    
