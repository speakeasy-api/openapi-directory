import dataclasses
from typing import Optional
from enum import Enum
from ..shared import role_enum_role_type_enum as shared_role_enum_role_type_enum
from ..shared import security as shared_security
from ..shared import chat_v1_service_role as shared_chat_v1_service_role


CREATE_ROLE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class CreateRolePathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateRoleCreateRoleRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    permission: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'Permission' }})
    type: shared_role_enum_role_type_enum.RoleEnumRoleTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'Type' }})
    

@dataclasses.dataclass
class CreateRoleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateRoleRequest:
    path_params: CreateRolePathParams = dataclasses.field()
    security: CreateRoleSecurity = dataclasses.field()
    request: Optional[CreateRoleCreateRoleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v1_service_role: Optional[shared_chat_v1_service_role.ChatV1ServiceRole] = dataclasses.field(default=None)
    
