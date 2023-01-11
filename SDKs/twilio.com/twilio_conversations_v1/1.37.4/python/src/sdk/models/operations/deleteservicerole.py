import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class DeleteServiceRolePathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteServiceRoleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteServiceRoleRequest:
    path_params: DeleteServiceRolePathParams = dataclasses.field()
    security: DeleteServiceRoleSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteServiceRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
