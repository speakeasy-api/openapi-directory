import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ChangePasswordPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChangePasswordRequestBodyNewPassword:
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ChangePasswordRequestBodyOldPassword:
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ChangePasswordRequestBody:
    new_password: Optional[ChangePasswordRequestBodyNewPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPassword') }})
    old_password: Optional[ChangePasswordRequestBodyOldPassword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldPassword') }})
    

@dataclasses.dataclass
class ChangePasswordRequest:
    path_params: ChangePasswordPathParams = dataclasses.field()
    request: Optional[ChangePasswordRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChangePasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
