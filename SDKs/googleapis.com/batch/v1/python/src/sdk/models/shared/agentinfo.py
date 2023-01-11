import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agenttaskinfo as shared_agenttaskinfo

class AgentInfoStateEnum(str, Enum):
    AGENT_STATE_UNSPECIFIED = "AGENT_STATE_UNSPECIFIED"
    AGENT_STARTING = "AGENT_STARTING"
    AGENT_RUNNING = "AGENT_RUNNING"
    AGENT_STOPPED = "AGENT_STOPPED"


@dataclass_json
@dataclasses.dataclass
class AgentInfo:
    r"""AgentInfo
    VM Agent Info.
    """
    
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    report_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    state: Optional[AgentInfoStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    task_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroupId') }})
    tasks: Optional[list[shared_agenttaskinfo.AgentTaskInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    
