import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service_role as shared_ip_messaging_v2_service_role


UPDATE_ROLE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class UpdateRolePathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRoleUpdateRoleRequest:
    permission: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'Permission' }})
    

@dataclasses.dataclass
class UpdateRoleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRoleRequest:
    path_params: UpdateRolePathParams = dataclasses.field()
    security: UpdateRoleSecurity = dataclasses.field()
    request: Optional[UpdateRoleUpdateRoleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_service_role: Optional[shared_ip_messaging_v2_service_role.IPMessagingV2ServiceRole] = dataclasses.field(default=None)
    
