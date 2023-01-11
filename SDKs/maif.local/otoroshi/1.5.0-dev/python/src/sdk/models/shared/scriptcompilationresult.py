import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scriptcompilationerror as shared_scriptcompilationerror


@dataclass_json
@dataclasses.dataclass
class ScriptCompilationResult:
    r"""ScriptCompilationResult
    The result of the compilation of a Script
    """
    
    done: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    error: Optional[shared_scriptcompilationerror.ScriptCompilationError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
