import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_recording_recording_transcription as shared_api_v2010_account_recording_recording_transcription


FETCH_RECORDING_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchRecordingTranscriptionPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    recording_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RecordingSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRecordingTranscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRecordingTranscriptionRequest:
    path_params: FetchRecordingTranscriptionPathParams = dataclasses.field()
    security: FetchRecordingTranscriptionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRecordingTranscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_recording_recording_transcription: Optional[shared_api_v2010_account_recording_recording_transcription.APIV2010AccountRecordingRecordingTranscription] = dataclasses.field(default=None)
    
