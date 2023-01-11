import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_composition_settings as shared_video_v1_composition_settings


FETCH_COMPOSITION_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchCompositionSettingsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCompositionSettingsRequest:
    security: FetchCompositionSettingsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCompositionSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_composition_settings: Optional[shared_video_v1_composition_settings.VideoV1CompositionSettings] = dataclasses.field(default=None)
    
