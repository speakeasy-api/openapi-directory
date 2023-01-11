import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_role as shared_conversations_v1_service_service_role


UPDATE_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceRolePathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceRoleUpdateServiceRoleRequest:
    permission: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'Permission' }})
    

@dataclasses.dataclass
class UpdateServiceRoleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceRoleRequest:
    path_params: UpdateServiceRolePathParams = dataclasses.field()
    security: UpdateServiceRoleSecurity = dataclasses.field()
    request: Optional[UpdateServiceRoleUpdateServiceRoleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_role: Optional[shared_conversations_v1_service_service_role.ConversationsV1ServiceServiceRole] = dataclasses.field(default=None)
    
