import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskspec as shared_taskspec
from ..shared import taskstatus as shared_taskstatus

class AgentTaskIntendedStateEnum(str, Enum):
    INTENDED_STATE_UNSPECIFIED = "INTENDED_STATE_UNSPECIFIED"
    ASSIGNED = "ASSIGNED"
    CANCELLED = "CANCELLED"
    DELETED = "DELETED"


@dataclass_json
@dataclasses.dataclass
class AgentTask:
    r"""AgentTask
    TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.
    """
    
    intended_state: Optional[AgentTaskIntendedStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedState') }})
    reached_barrier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachedBarrier') }})
    spec: Optional[shared_taskspec.TaskSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[shared_taskstatus.TaskStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    
