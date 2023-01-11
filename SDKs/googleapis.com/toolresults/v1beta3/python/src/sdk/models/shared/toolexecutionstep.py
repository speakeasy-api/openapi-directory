import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import toolexecution as shared_toolexecution


@dataclass_json
@dataclasses.dataclass
class ToolExecutionStep:
    r"""ToolExecutionStep
    Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
    """
    
    tool_execution: Optional[shared_toolexecution.ToolExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolExecution') }})
    
