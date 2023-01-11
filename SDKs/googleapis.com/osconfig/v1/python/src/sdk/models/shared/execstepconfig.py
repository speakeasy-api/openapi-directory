import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gcsobject as shared_gcsobject

class ExecStepConfigInterpreterEnum(str, Enum):
    INTERPRETER_UNSPECIFIED = "INTERPRETER_UNSPECIFIED"
    NONE = "NONE"
    SHELL = "SHELL"
    POWERSHELL = "POWERSHELL"


@dataclass_json
@dataclasses.dataclass
class ExecStepConfig:
    r"""ExecStepConfig
    Common configurations for an ExecStep.
    """
    
    allowed_success_codes: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedSuccessCodes') }})
    gcs_object: Optional[shared_gcsobject.GcsObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsObject') }})
    interpreter: Optional[ExecStepConfigInterpreterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreter') }})
    local_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPath') }})
    
