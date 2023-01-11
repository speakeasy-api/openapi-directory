import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_dialing_permissions_dialing_permissions_settings as shared_voice_v1_dialing_permissions_dialing_permissions_settings


UPDATE_DIALING_PERMISSIONS_SETTINGS_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest:
    dialing_permissions_inheritance: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DialingPermissionsInheritance' }})
    

@dataclasses.dataclass
class UpdateDialingPermissionsSettingsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDialingPermissionsSettingsRequest:
    security: UpdateDialingPermissionsSettingsSecurity = dataclasses.field()
    request: Optional[UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateDialingPermissionsSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_dialing_permissions_dialing_permissions_settings: Optional[shared_voice_v1_dialing_permissions_dialing_permissions_settings.VoiceV1DialingPermissionsDialingPermissionsSettings] = dataclasses.field(default=None)
    
