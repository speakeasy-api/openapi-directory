import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskstatus as shared_taskstatus


@dataclass_json
@dataclasses.dataclass
class AgentTaskInfo:
    r"""AgentTaskInfo
    Task Info
    """
    
    runnable: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runnable') }})
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_status: Optional[shared_taskstatus.TaskStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    
