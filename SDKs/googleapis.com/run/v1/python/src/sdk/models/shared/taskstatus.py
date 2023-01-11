import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv1condition as shared_googlecloudrunv1condition
from ..shared import taskattemptresult as shared_taskattemptresult


@dataclass_json
@dataclasses.dataclass
class TaskStatus:
    r"""TaskStatus
    TaskStatus represents the status of a task.
    """
    
    completion_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    conditions: Optional[list[shared_googlecloudrunv1condition.GoogleCloudRunV1Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    last_attempt_result: Optional[shared_taskattemptresult.TaskAttemptResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptResult') }})
    log_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logUri') }})
    observed_generation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    retried: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retried') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
