import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneannouncements_post_responses_400_content_application_1json_schema as shared_oneannouncements_post_responses_400_content_application_1json_schema
from ..shared import oneannouncements_post_responses_403_content_application_1json_schema as shared_oneannouncements_post_responses_403_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class PostCallsRequestBodyOptionsPlayAudio:
    announcement_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcement_id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCallsRequestBodyOptions:
    a_leg_caller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('a_leg_caller_id') }})
    a_leg_only: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('a_leg_only') }})
    cancel_key: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_key') }})
    connect_key: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_key') }})
    play_audio: Optional[list[PostCallsRequestBodyOptionsPlayAudio]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_audio') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCallsRequestBody:
    caller_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_id') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    announcement_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcement_at') }})
    announcement_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcement_id') }})
    hangup_announcement_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangup_announcement_id') }})
    hangup_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangup_at') }})
    options: Optional[PostCallsRequestBodyOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCalls202ApplicationJSON:
    call: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Call') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    

@dataclasses.dataclass
class PostCallsRequest:
    request: PostCallsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCallsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_calls_202_application_json_object: Optional[PostCalls202ApplicationJSON] = dataclasses.field(default=None)
    oneannouncements_post_responses_400_content_application_1json_schema: Optional[shared_oneannouncements_post_responses_400_content_application_1json_schema.OneannouncementsPostResponses400ContentApplication1jsonSchema] = dataclasses.field(default=None)
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared_oneannouncements_post_responses_403_content_application_1json_schema.OneannouncementsPostResponses403ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
