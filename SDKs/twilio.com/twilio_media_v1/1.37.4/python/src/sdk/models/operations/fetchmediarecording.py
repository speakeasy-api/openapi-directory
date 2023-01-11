import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import media_v1_media_recording as shared_media_v1_media_recording


FETCH_MEDIA_RECORDING_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class FetchMediaRecordingPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMediaRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMediaRecordingRequest:
    path_params: FetchMediaRecordingPathParams = dataclasses.field()
    security: FetchMediaRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMediaRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_media_recording: Optional[shared_media_v1_media_recording.MediaV1MediaRecording] = dataclasses.field(default=None)
    
