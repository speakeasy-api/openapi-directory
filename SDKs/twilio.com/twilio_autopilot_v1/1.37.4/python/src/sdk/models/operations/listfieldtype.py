import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_field_type as shared_autopilot_v1_assistant_field_type


LIST_FIELD_TYPE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class ListFieldTypePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListFieldTypeQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListFieldTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListFieldTypeListFieldTypeResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFieldTypeListFieldTypeResponse:
    field_types: Optional[list[shared_autopilot_v1_assistant_field_type.AutopilotV1AssistantFieldType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_types') }})
    meta: Optional[ListFieldTypeListFieldTypeResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListFieldTypeRequest:
    path_params: ListFieldTypePathParams = dataclasses.field()
    query_params: ListFieldTypeQueryParams = dataclasses.field()
    security: ListFieldTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListFieldTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_field_type_response: Optional[ListFieldTypeListFieldTypeResponse] = dataclasses.field(default=None)
    
