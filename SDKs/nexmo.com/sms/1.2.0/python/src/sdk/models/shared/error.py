import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errormessage as shared_errormessage


@dataclass_json
@dataclasses.dataclass
class Error:
    r"""Error
    Error
    """
    
    message_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message-count') }})
    messages: Optional[list[shared_errormessage.ErrorMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    
