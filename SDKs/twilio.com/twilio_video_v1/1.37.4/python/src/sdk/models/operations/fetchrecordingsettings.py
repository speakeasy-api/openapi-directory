import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_recording_settings as shared_video_v1_recording_settings


FETCH_RECORDING_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRecordingSettingsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRecordingSettingsRequest:
    security: FetchRecordingSettingsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRecordingSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_recording_settings: Optional[shared_video_v1_recording_settings.VideoV1RecordingSettings] = dataclasses.field(default=None)
    
