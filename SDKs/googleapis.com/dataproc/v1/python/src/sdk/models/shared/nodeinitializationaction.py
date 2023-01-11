import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NodeInitializationAction:
    r"""NodeInitializationAction
    Specifies an executable to run on a fully configured node and a timeout period for executable completion.
    """
    
    executable_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executableFile') }})
    execution_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTimeout') }})
    
