import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_recording_recording_add_on_result as shared_api_v2010_account_recording_recording_add_on_result


LIST_RECORDING_ADD_ON_RESULT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListRecordingAddOnResultPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRecordingAddOnResultQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRecordingAddOnResultSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListRecordingAddOnResultListRecordingAddOnResultResponse:
    add_on_results: Optional[list[shared_api_v2010_account_recording_recording_add_on_result.APIV2010AccountRecordingRecordingAddOnResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_on_results') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListRecordingAddOnResultRequest:
    path_params: ListRecordingAddOnResultPathParams = dataclasses.field()
    query_params: ListRecordingAddOnResultQueryParams = dataclasses.field()
    security: ListRecordingAddOnResultSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListRecordingAddOnResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_recording_add_on_result_response: Optional[ListRecordingAddOnResultListRecordingAddOnResultResponse] = dataclasses.field(default=None)
    
