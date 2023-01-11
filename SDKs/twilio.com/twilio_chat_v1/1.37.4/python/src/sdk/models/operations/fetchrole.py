import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v1_service_role as shared_chat_v1_service_role


FETCH_ROLE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class FetchRolePathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
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
    chat_v1_service_role: Optional[shared_chat_v1_service_role.ChatV1ServiceRole] = dataclasses.field(default=None)
    
