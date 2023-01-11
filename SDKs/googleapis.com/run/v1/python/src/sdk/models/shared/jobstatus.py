import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv1condition as shared_googlecloudrunv1condition
from ..shared import executionreference as shared_executionreference


@dataclass_json
@dataclasses.dataclass
class JobStatus:
    r"""JobStatus
    JobStatus represents the current state of a Job.
    """
    
    conditions: Optional[list[shared_googlecloudrunv1condition.GoogleCloudRunV1Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    execution_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionCount') }})
    latest_created_execution: Optional[shared_executionreference.ExecutionReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCreatedExecution') }})
    observed_generation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    
