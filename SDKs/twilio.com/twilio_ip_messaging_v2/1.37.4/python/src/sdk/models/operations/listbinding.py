import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import binding_enum_binding_type_enum as shared_binding_enum_binding_type_enum
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service_binding as shared_ip_messaging_v2_service_binding


LIST_BINDING_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class ListBindingPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBindingQueryParams:
    binding_type: Optional[list[shared_binding_enum_binding_type_enum.BindingEnumBindingTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'BindingType', 'style': 'form', 'explode': True }})
    identity: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBindingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListBindingListBindingResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListBindingListBindingResponse:
    bindings: Optional[list[shared_ip_messaging_v2_service_binding.IPMessagingV2ServiceBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    meta: Optional[ListBindingListBindingResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListBindingRequest:
    path_params: ListBindingPathParams = dataclasses.field()
    query_params: ListBindingQueryParams = dataclasses.field()
    security: ListBindingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_binding_response: Optional[ListBindingListBindingResponse] = dataclasses.field(default=None)
    
