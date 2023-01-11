import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_transcription as shared_api_v2010_account_transcription


LIST_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListTranscriptionPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTranscriptionQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListTranscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListTranscriptionListTranscriptionResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    transcriptions: Optional[list[shared_api_v2010_account_transcription.APIV2010AccountTranscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptions') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListTranscriptionRequest:
    path_params: ListTranscriptionPathParams = dataclasses.field()
    query_params: ListTranscriptionQueryParams = dataclasses.field()
    security: ListTranscriptionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListTranscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_transcription_response: Optional[ListTranscriptionListTranscriptionResponse] = dataclasses.field(default=None)
    
