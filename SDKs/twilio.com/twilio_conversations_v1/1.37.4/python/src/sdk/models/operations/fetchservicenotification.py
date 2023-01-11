import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_configuration_service_notification as shared_conversations_v1_service_service_configuration_service_notification


FETCH_SERVICE_NOTIFICATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchServiceNotificationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchServiceNotificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchServiceNotificationRequest:
    path_params: FetchServiceNotificationPathParams = dataclasses.field()
    security: FetchServiceNotificationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchServiceNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_configuration_service_notification: Optional[shared_conversations_v1_service_service_configuration_service_notification.ConversationsV1ServiceServiceConfigurationServiceNotification] = dataclasses.field(default=None)
    
