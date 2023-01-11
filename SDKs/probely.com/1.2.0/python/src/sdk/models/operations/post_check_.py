import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostCheckRequestBody:
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCheck200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCheck400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class PostCheckRequest:
    request: PostCheckRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_check_200_application_json_object: Optional[PostCheck200ApplicationJSON] = dataclasses.field(default=None)
    post_check_400_application_json_object: Optional[PostCheck400ApplicationJSON] = dataclasses.field(default=None)
    
