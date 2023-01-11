import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskexecution as shared_taskexecution


@dataclass_json
@dataclasses.dataclass
class StatusEvent:
    r"""StatusEvent
    Status event
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    task_execution: Optional[shared_taskexecution.TaskExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskExecution') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
