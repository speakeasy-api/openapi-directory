import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stacktraceelement as shared_stacktraceelement


@dataclass_json
@dataclasses.dataclass
class StackTrace:
    r"""StackTrace
    A collection of stack elements (frames) where an error occurred.
    """
    
    elements: Optional[list[shared_stacktraceelement.StackTraceElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    
