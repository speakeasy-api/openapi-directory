import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import insights_v1_account_settings as shared_insights_v1_account_settings


UPDATE_ACCOUNT_SETTINGS_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class UpdateAccountSettingsUpdateAccountSettingsRequest:
    advanced_features: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AdvancedFeatures' }})
    subaccount_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SubaccountSid' }})
    voice_trace: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceTrace' }})
    

@dataclasses.dataclass
class UpdateAccountSettingsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateAccountSettingsRequest:
    security: UpdateAccountSettingsSecurity = dataclasses.field()
    request: Optional[UpdateAccountSettingsUpdateAccountSettingsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAccountSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_account_settings: Optional[shared_insights_v1_account_settings.InsightsV1AccountSettings] = dataclasses.field(default=None)
    
