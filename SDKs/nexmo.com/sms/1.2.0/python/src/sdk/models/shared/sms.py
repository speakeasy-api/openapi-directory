import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import message as shared_message


@dataclass_json
@dataclasses.dataclass
class Sms:
    r"""Sms
    Message sent
    """
    
    message_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message-count') }})
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    
