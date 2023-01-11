import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateUserInGroupQueryParams:
    activate: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'activate', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateUserInGroupRequestBodyProfile:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    login: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateUserInGroupRequestBody:
    group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupIds') }})
    profile: Optional[CreateUserInGroupRequestBodyProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    

@dataclasses.dataclass
class CreateUserInGroupRequest:
    query_params: CreateUserInGroupQueryParams = dataclasses.field()
    request: Optional[CreateUserInGroupRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateUserInGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
