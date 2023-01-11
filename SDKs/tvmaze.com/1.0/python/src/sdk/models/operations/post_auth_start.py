import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAuthStartRequestBody:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_confirmation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_confirmation') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAuthStart200ApplicationJSON:
    confirm_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirm_url') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclasses.dataclass
class PostAuthStartRequest:
    request: PostAuthStartRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAuthStartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_auth_start_200_application_json_object: Optional[PostAuthStart200ApplicationJSON] = dataclasses.field(default=None)
    
