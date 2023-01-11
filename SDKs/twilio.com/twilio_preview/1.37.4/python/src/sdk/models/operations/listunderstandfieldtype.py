import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_field_type as shared_preview_understand_assistant_field_type


LIST_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListUnderstandFieldTypePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUnderstandFieldTypeQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListUnderstandFieldTypeListUnderstandFieldTypeResponse:
    field_types: Optional[list[shared_preview_understand_assistant_field_type.PreviewUnderstandAssistantFieldType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_types') }})
    meta: Optional[ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListUnderstandFieldTypeRequest:
    path_params: ListUnderstandFieldTypePathParams = dataclasses.field()
    query_params: ListUnderstandFieldTypeQueryParams = dataclasses.field()
    security: ListUnderstandFieldTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUnderstandFieldTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_understand_field_type_response: Optional[ListUnderstandFieldTypeListUnderstandFieldTypeResponse] = dataclasses.field(default=None)
    
