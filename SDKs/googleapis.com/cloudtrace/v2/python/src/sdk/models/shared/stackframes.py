import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stackframe as shared_stackframe


@dataclass_json
@dataclasses.dataclass
class StackFrames:
    r"""StackFrames
    A collection of stack frames, which can be truncated.
    """
    
    dropped_frames_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedFramesCount') }})
    frame: Optional[list[shared_stackframe.StackFrame]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frame') }})
    
