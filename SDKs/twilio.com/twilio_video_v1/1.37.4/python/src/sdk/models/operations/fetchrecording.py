import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_recording as shared_video_v1_recording


FETCH_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRecordingPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

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
    video_v1_recording: Optional[shared_video_v1_recording.VideoV1Recording] = dataclasses.field(default=None)
    
