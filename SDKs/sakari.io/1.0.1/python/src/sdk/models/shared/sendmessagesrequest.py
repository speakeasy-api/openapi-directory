import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactrequest as shared_contactrequest


@dataclass_json
@dataclasses.dataclass
class SendMessagesRequestFilters:
    attributes: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class SendMessagesRequestMedia:
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class SendMessagesRequestTypeEnum(str, Enum):
    SMS = "SMS"
    MMS = "MMS"


@dataclass_json
@dataclasses.dataclass
class SendMessagesRequest:
    contacts: Optional[list[shared_contactrequest.ContactRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    conversation_strategy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationStrategy') }})
    conversations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversations') }})
    filters: Optional[SendMessagesRequestFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    media: Optional[list[SendMessagesRequestMedia]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    type: Optional[SendMessagesRequestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
