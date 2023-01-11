import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TaskExecution:
    r"""TaskExecution
    This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
    """
    
    exit_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    
