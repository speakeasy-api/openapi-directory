import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import messaging_v1_service_us_app_to_person as shared_messaging_v1_service_us_app_to_person


LIST_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class ListUsAppToPersonPathParams:
    messaging_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUsAppToPersonQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUsAppToPersonSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUsAppToPersonListUsAppToPersonResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListUsAppToPersonListUsAppToPersonResponse:
    compliance: Optional[list[shared_messaging_v1_service_us_app_to_person.MessagingV1ServiceUsAppToPerson]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    meta: Optional[ListUsAppToPersonListUsAppToPersonResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListUsAppToPersonRequest:
    path_params: ListUsAppToPersonPathParams = dataclasses.field()
    query_params: ListUsAppToPersonQueryParams = dataclasses.field()
    security: ListUsAppToPersonSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUsAppToPersonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_us_app_to_person_response: Optional[ListUsAppToPersonListUsAppToPersonResponse] = dataclasses.field(default=None)
    
