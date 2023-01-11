import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationcreated as shared_applicationcreated

class CreateApplicationRequestBodyTypeEnum(str, Enum):
    VOICE = "voice"
    MESSAGES = "messages"


@dataclass_json
@dataclasses.dataclass
class CreateApplicationRequestBody:
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    api_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_secret') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateApplicationRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    answer_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_method') }})
    answer_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_url') }})
    event_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_method') }})
    event_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    inbound_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_method') }})
    inbound_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_url') }})
    status_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_method') }})
    status_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_url') }})
    

@dataclasses.dataclass
class CreateApplicationRequest:
    request: Optional[CreateApplicationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_created: Optional[shared_applicationcreated.ApplicationCreated] = dataclasses.field(default=None)
    
