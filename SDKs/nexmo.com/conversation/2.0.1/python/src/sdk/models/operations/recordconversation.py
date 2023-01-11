import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action_enum as shared_action_enum
from ..shared import format_enum as shared_format_enum


RECORD_CONVERSATION_SERVERS = [
	"https://api.nexmo.com/v1",
]


@dataclasses.dataclass
class RecordConversationPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RecordConversationRequestBody:
    action: shared_action_enum.ActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    event_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_method') }})
    event_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    format: Optional[shared_format_enum.FormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    split: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('split') }})
    

@dataclasses.dataclass
class RecordConversationRequest:
    path_params: RecordConversationPathParams = dataclasses.field()
    request: Optional[RecordConversationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RecordConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
