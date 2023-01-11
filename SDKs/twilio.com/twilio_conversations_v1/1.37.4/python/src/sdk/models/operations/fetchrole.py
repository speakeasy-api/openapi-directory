import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_role as shared_conversations_v1_role


FETCH_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchRolePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRoleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRoleRequest:
    path_params: FetchRolePathParams = dataclasses.field()
    security: FetchRoleSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_role: Optional[shared_conversations_v1_role.ConversationsV1Role] = dataclasses.field(default=None)
    
