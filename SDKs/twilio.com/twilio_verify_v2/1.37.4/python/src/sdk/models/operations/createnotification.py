import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity_challenge_notification as shared_verify_v2_service_entity_challenge_notification


CREATE_NOTIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateNotificationPathParams:
    challenge_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChallengeSid', 'style': 'simple', 'explode': False }})
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateNotificationCreateNotificationRequest:
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class CreateNotificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateNotificationRequest:
    path_params: CreateNotificationPathParams = dataclasses.field()
    security: CreateNotificationSecurity = dataclasses.field()
    request: Optional[CreateNotificationCreateNotificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_entity_challenge_notification: Optional[shared_verify_v2_service_entity_challenge_notification.VerifyV2ServiceEntityChallengeNotification] = dataclasses.field(default=None)
    
