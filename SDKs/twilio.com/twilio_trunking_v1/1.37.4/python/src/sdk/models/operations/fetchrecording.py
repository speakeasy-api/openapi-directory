import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_recording as shared_trunking_v1_trunk_recording


FETCH_RECORDING_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class FetchRecordingPathParams:
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRecordingRequest:
    path_params: FetchRecordingPathParams = dataclasses.field()
    security: FetchRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_recording: Optional[shared_trunking_v1_trunk_recording.TrunkingV1TrunkRecording] = dataclasses.field(default=None)
    
