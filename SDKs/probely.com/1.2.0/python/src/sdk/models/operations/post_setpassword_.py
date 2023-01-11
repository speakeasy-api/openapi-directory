import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostSetpasswordRequestBody:
    confpassword: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confpassword') }})
    password: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSetpassword200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSetpassword400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class PostSetpasswordRequest:
    request: PostSetpasswordRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSetpasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_setpassword_200_application_json_object: Optional[PostSetpassword200ApplicationJSON] = dataclasses.field(default=None)
    post_setpassword_400_application_json_object: Optional[PostSetpassword400ApplicationJSON] = dataclasses.field(default=None)
    
