import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpbody as shared_httpbody


@dataclass_json
@dataclasses.dataclass
class BufferTaskRequest:
    r"""BufferTaskRequest
    Request message for BufferTask.
    """
    
    body: Optional[shared_httpbody.HTTPBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    
