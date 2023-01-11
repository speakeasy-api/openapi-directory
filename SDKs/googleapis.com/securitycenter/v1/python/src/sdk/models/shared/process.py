import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import file as shared_file
from ..shared import environmentvariable as shared_environmentvariable


@dataclass_json
@dataclasses.dataclass
class Process:
    r"""Process
    Represents an operating system process.
    """
    
    args: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    arguments_truncated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argumentsTruncated') }})
    binary: Optional[shared_file.File] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binary') }})
    env_variables: Optional[list[shared_environmentvariable.EnvironmentVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariables') }})
    env_variables_truncated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariablesTruncated') }})
    libraries: Optional[list[shared_file.File]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraries') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_pid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPid') }})
    pid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pid') }})
    script: Optional[shared_file.File] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
