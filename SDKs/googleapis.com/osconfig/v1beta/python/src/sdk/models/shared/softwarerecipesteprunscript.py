import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SoftwareRecipeStepRunScriptInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclasses.dataclass
class SoftwareRecipeStepRunScript:
    r"""SoftwareRecipeStepRunScript
    Runs a script through an interpreter.
    """
    
    allowed_exit_codes: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedExitCodes') }})
    interpreter: Optional[SoftwareRecipeStepRunScriptInterpreterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreter') }})
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    
