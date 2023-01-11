import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import insights_v1_account_settings as shared_insights_v1_account_settings


FETCH_ACCOUNT_SETTINGS_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class FetchAccountSettingsQueryParams:
    subaccount_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SubaccountSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchAccountSettingsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAccountSettingsRequest:
    query_params: FetchAccountSettingsQueryParams = dataclasses.field()
    security: FetchAccountSettingsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAccountSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_account_settings: Optional[shared_insights_v1_account_settings.InsightsV1AccountSettings] = dataclasses.field(default=None)
    
