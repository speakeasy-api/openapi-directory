import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import toolexitcode as shared_toolexitcode
from ..shared import filereference as shared_filereference
from ..shared import tooloutputreference as shared_tooloutputreference


@dataclass_json
@dataclasses.dataclass
class ToolExecution:
    r"""ToolExecution
    An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
    """
    
    command_line_arguments: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commandLineArguments') }})
    exit_code: Optional[shared_toolexitcode.ToolExitCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    tool_logs: Optional[list[shared_filereference.FileReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolLogs') }})
    tool_outputs: Optional[list[shared_tooloutputreference.ToolOutputReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolOutputs') }})
    
