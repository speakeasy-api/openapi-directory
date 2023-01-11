import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import messaging_v1_service_alpha_sender as shared_messaging_v1_service_alpha_sender


LIST_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class ListAlphaSenderPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAlphaSenderQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAlphaSenderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlphaSenderListAlphaSenderResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlphaSenderListAlphaSenderResponse:
    alpha_senders: Optional[list[shared_messaging_v1_service_alpha_sender.MessagingV1ServiceAlphaSender]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha_senders') }})
    meta: Optional[ListAlphaSenderListAlphaSenderResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListAlphaSenderRequest:
    path_params: ListAlphaSenderPathParams = dataclasses.field()
    query_params: ListAlphaSenderQueryParams = dataclasses.field()
    security: ListAlphaSenderSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListAlphaSenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_alpha_sender_response: Optional[ListAlphaSenderListAlphaSenderResponse] = dataclasses.field(default=None)
    
