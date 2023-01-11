import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import service_binding_enum_binding_type_enum as shared_service_binding_enum_binding_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_binding as shared_conversations_v1_service_service_binding


LIST_SERVICE_BINDING_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class ListServiceBindingPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListServiceBindingQueryParams:
    binding_type: Optional[list[shared_service_binding_enum_binding_type_enum.ServiceBindingEnumBindingTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'BindingType', 'style': 'form', 'explode': True }})
    identity: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceBindingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListServiceBindingListServiceBindingResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListServiceBindingListServiceBindingResponse:
    bindings: Optional[list[shared_conversations_v1_service_service_binding.ConversationsV1ServiceServiceBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    meta: Optional[ListServiceBindingListServiceBindingResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListServiceBindingRequest:
    path_params: ListServiceBindingPathParams = dataclasses.field()
    query_params: ListServiceBindingQueryParams = dataclasses.field()
    security: ListServiceBindingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListServiceBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_service_binding_response: Optional[ListServiceBindingListServiceBindingResponse] = dataclasses.field(default=None)
    
