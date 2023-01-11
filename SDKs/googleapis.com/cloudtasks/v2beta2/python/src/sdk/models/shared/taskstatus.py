import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attemptstatus as shared_attemptstatus


@dataclass_json
@dataclasses.dataclass
class TaskStatus:
    r"""TaskStatus
    Status of the task.
    """
    
    attempt_dispatch_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptDispatchCount') }})
    attempt_response_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptResponseCount') }})
    first_attempt_status: Optional[shared_attemptstatus.AttemptStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAttemptStatus') }})
    last_attempt_status: Optional[shared_attemptstatus.AttemptStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptStatus') }})
    
