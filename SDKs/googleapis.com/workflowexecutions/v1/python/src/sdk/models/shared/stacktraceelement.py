import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import position as shared_position


@dataclass_json
@dataclasses.dataclass
class StackTraceElement:
    r"""StackTraceElement
    A single stack element (frame) where an error occurred.
    """
    
    position: Optional[shared_position.Position] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    routine: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routine') }})
    step: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    
