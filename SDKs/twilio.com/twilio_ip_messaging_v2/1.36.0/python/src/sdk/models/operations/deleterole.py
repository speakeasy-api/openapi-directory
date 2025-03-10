from dataclasses import dataclass, field
from typing import Optional
DELETE_ROLE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class DeleteRolePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteRolePathParams = field(default=None)
    security: DeleteRoleSecurity = field(default=None)
    

@dataclass
class DeleteRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
