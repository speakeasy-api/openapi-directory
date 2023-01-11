import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import truncatablestring as shared_truncatablestring
from ..shared import module as shared_module


@dataclass_json
@dataclasses.dataclass
class StackFrame:
    r"""StackFrame
    Represents a single stack frame in a stack trace.
    """
    
    column_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnNumber') }})
    file_name: Optional[shared_truncatablestring.TruncatableString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    function_name: Optional[shared_truncatablestring.TruncatableString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    line_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineNumber') }})
    load_module: Optional[shared_module.Module] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadModule') }})
    original_function_name: Optional[shared_truncatablestring.TruncatableString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalFunctionName') }})
    source_version: Optional[shared_truncatablestring.TruncatableString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    
