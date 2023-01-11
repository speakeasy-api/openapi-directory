import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stackframes as shared_stackframes


@dataclass_json
@dataclasses.dataclass
class StackTrace:
    r"""StackTrace
    A call stack appearing in a trace.
    """
    
    stack_frames: Optional[shared_stackframes.StackFrames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackFrames') }})
    stack_trace_hash_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackTraceHashId') }})
    
