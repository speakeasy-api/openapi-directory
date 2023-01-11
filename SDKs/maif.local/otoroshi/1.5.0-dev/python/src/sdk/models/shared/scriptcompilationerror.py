import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScriptCompilationError:
    r"""ScriptCompilationError
    The error of the compilation of a Script
    """
    
    column: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    file: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    line: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    message: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    raw_message: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawMessage') }})
    
