import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import task as shared_task

class CreateTaskRequestResponseViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclasses.dataclass
class CreateTaskRequest:
    r"""CreateTaskRequest
    Request message for CreateTask.
    """
    
    response_view: Optional[CreateTaskRequestResponseViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseView') }})
    task: Optional[shared_task.Task] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    
