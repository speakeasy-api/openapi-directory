import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_ROLE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class DeleteRolePathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRoleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteRoleRequest:
    path_params: DeleteRolePathParams = dataclasses.field()
    security: DeleteRoleSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
