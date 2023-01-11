import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_transcription as shared_api_v2010_account_transcription


FETCH_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchTranscriptionPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTranscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTranscriptionRequest:
    path_params: FetchTranscriptionPathParams = dataclasses.field()
    security: FetchTranscriptionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTranscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_transcription: Optional[shared_api_v2010_account_transcription.APIV2010AccountTranscription] = dataclasses.field(default=None)
    
