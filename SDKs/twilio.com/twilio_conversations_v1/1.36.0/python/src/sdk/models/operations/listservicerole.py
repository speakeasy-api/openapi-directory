from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SERVICE_ROLE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class ListServiceRolePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceRoleQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceRoleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListServiceRoleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListServiceRolePathParams = field(default=None)
    query_params: ListServiceRoleQueryParams = field(default=None)
    security: ListServiceRoleSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListServiceRoleListServiceRoleResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListServiceRoleListServiceRoleResponse:
    meta: Optional[ListServiceRoleListServiceRoleResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    roles: Optional[List[shared.ConversationsV1ServiceServiceRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    

@dataclass
class ListServiceRoleResponse:
    content_type: str = field(default=None)
    list_service_role_response: Optional[ListServiceRoleListServiceRoleResponse] = field(default=None)
    status_code: int = field(default=None)
    
