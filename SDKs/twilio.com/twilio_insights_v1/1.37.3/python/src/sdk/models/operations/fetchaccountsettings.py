from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ACCOUNT_SETTINGS_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class FetchAccountSettingsQueryParams:
    subaccount_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SubaccountSid', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchAccountSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAccountSettingsRequest:
    query_params: FetchAccountSettingsQueryParams = field()
    security: FetchAccountSettingsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAccountSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    insights_v1_account_settings: Optional[shared.InsightsV1AccountSettings] = field(default=None)
    
