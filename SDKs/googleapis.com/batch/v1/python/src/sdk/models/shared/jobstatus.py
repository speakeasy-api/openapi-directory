import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statusevent as shared_statusevent
from ..shared import taskgroupstatus as shared_taskgroupstatus

class JobStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    SCHEDULED = "SCHEDULED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS"


@dataclass_json
@dataclasses.dataclass
class JobStatus:
    r"""JobStatus
    Job status.
    """
    
    run_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runDuration') }})
    state: Optional[JobStatusStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_events: Optional[list[shared_statusevent.StatusEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusEvents') }})
    task_groups: Optional[dict[str, shared_taskgroupstatus.TaskGroupStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroups') }})
    
