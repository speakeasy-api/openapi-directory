import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAuthPollRequestBody:
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAuthPoll200ApplicationJSON:
    apikey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apikey') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclasses.dataclass
class PostAuthPollRequest:
    request: PostAuthPollRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAuthPollResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_auth_poll_200_application_json_object: Optional[PostAuthPoll200ApplicationJSON] = dataclasses.field(default=None)
    
