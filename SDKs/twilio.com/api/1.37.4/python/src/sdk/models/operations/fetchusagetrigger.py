import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_usage_usage_trigger as shared_api_v2010_account_usage_usage_trigger


FETCH_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchUsageTriggerPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUsageTriggerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUsageTriggerRequest:
    path_params: FetchUsageTriggerPathParams = dataclasses.field()
    security: FetchUsageTriggerSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUsageTriggerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_usage_usage_trigger: Optional[shared_api_v2010_account_usage_usage_trigger.APIV2010AccountUsageUsageTrigger] = dataclasses.field(default=None)
    
