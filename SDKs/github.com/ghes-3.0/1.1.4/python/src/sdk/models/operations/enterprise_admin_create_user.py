import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreateUserRequestBody:
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateUserRequest:
    request: Optional[EnterpriseAdminCreateUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_user: Optional[shared_simple_user.SimpleUser] = dataclasses.field(default=None)
    
