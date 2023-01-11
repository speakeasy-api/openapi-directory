import dataclasses
from typing import Optional
from enum import Enum
from ..shared import service_role_enum_role_type_enum as shared_service_role_enum_role_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_role as shared_conversations_v1_service_service_role


CREATE_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class CreateServiceRolePathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateServiceRoleCreateServiceRoleRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    permission: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'Permission' }})
    type: shared_service_role_enum_role_type_enum.ServiceRoleEnumRoleTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'Type' }})
    

@dataclasses.dataclass
class CreateServiceRoleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceRoleRequest:
    path_params: CreateServiceRolePathParams = dataclasses.field()
    security: CreateServiceRoleSecurity = dataclasses.field()
    request: Optional[CreateServiceRoleCreateServiceRoleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateServiceRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_role: Optional[shared_conversations_v1_service_service_role.ConversationsV1ServiceServiceRole] = dataclasses.field(default=None)
    
