import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteUsageTriggerPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUsageTriggerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUsageTriggerRequest:
    path_params: DeleteUsageTriggerPathParams = dataclasses.field()
    security: DeleteUsageTriggerSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUsageTriggerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
