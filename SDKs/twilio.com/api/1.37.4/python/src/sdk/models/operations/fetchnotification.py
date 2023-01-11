import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_notification_instance as shared_api_v2010_account_notification_instance


FETCH_NOTIFICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchNotificationPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchNotificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchNotificationRequest:
    path_params: FetchNotificationPathParams = dataclasses.field()
    security: FetchNotificationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_notification_instance: Optional[shared_api_v2010_account_notification_instance.APIV2010AccountNotificationInstance] = dataclasses.field(default=None)
    
