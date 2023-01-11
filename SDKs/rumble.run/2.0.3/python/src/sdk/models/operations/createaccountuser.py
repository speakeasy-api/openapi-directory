import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import useroptions as shared_useroptions
from ..shared import user as shared_user


@dataclasses.dataclass
class CreateAccountUserSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateAccountUserRequest:
    request: shared_useroptions.UserOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAccountUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
