import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import userinviteoptions as shared_userinviteoptions
from ..shared import user as shared_user


@dataclasses.dataclass
class CreateAccountUserInviteSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateAccountUserInviteRequest:
    request: shared_userinviteoptions.UserInviteOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountUserInviteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAccountUserInviteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
