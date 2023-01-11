import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_dialing_permissions_dialing_permissions_settings as shared_voice_v1_dialing_permissions_dialing_permissions_settings


FETCH_DIALING_PERMISSIONS_SETTINGS_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class FetchDialingPermissionsSettingsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDialingPermissionsSettingsRequest:
    security: FetchDialingPermissionsSettingsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDialingPermissionsSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_dialing_permissions_dialing_permissions_settings: Optional[shared_voice_v1_dialing_permissions_dialing_permissions_settings.VoiceV1DialingPermissionsDialingPermissionsSettings] = dataclasses.field(default=None)
    
