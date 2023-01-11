import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostProfileChangePasswordRequestBody:
    confpassword: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confpassword') }})
    current_password: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_password') }})
    password: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclass_json
@dataclasses.dataclass
class PostProfileChangePassword200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostProfileChangePassword400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostProfileChangePassword401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostProfileChangePasswordRequest:
    request: PostProfileChangePasswordRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostProfileChangePasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_profile_change_password_200_application_json_object: Optional[PostProfileChangePassword200ApplicationJSON] = dataclasses.field(default=None)
    post_profile_change_password_400_application_json_object: Optional[PostProfileChangePassword400ApplicationJSON] = dataclasses.field(default=None)
    post_profile_change_password_401_application_json_object: Optional[PostProfileChangePassword401ApplicationJSON] = dataclasses.field(default=None)
    
