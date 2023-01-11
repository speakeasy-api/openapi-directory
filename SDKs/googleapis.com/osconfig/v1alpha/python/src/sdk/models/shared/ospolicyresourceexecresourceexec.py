import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourcefile as shared_ospolicyresourcefile

class OsPolicyResourceExecResourceExecInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    NONE = "NONE"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourceExecResourceExec:
    r"""OsPolicyResourceExecResourceExec
    A file or script to execute.
    """
    
    args: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    file: Optional[shared_ospolicyresourcefile.OsPolicyResourceFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    interpreter: Optional[OsPolicyResourceExecResourceExecInterpreterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreter') }})
    output_file_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFilePath') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
