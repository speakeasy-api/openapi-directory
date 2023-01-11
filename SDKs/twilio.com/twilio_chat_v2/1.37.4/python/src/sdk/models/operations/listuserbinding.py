import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user_binding_enum_binding_type_enum as shared_user_binding_enum_binding_type_enum
from ..shared import security as shared_security
from ..shared import chat_v2_service_user_user_binding as shared_chat_v2_service_user_user_binding


LIST_USER_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class ListUserBindingPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUserBindingQueryParams:
    binding_type: Optional[list[shared_user_binding_enum_binding_type_enum.UserBindingEnumBindingTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'BindingType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUserBindingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUserBindingListUserBindingResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListUserBindingListUserBindingResponse:
    bindings: Optional[list[shared_chat_v2_service_user_user_binding.ChatV2ServiceUserUserBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    meta: Optional[ListUserBindingListUserBindingResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListUserBindingRequest:
    path_params: ListUserBindingPathParams = dataclasses.field()
    query_params: ListUserBindingQueryParams = dataclasses.field()
    security: ListUserBindingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUserBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_user_binding_response: Optional[ListUserBindingListUserBindingResponse] = dataclasses.field(default=None)
    
