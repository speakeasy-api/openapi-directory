import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_call_recording as shared_api_v2010_account_call_call_recording


FETCH_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchCallRecordingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCallRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCallRecordingRequest:
    path_params: FetchCallRecordingPathParams = dataclasses.field()
    security: FetchCallRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCallRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_call_recording: Optional[shared_api_v2010_account_call_call_recording.APIV2010AccountCallCallRecording] = dataclasses.field(default=None)
    
