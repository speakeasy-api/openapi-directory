import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import notification_enum_priority_enum as shared_notification_enum_priority_enum
from ..shared import security as shared_security
from ..shared import notify_v1_service_notification as shared_notify_v1_service_notification


CREATE_NOTIFICATION_SERVERS = [
	"https://notify.twilio.com",
]


@dataclasses.dataclass
class CreateNotificationPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateNotificationCreateNotificationRequest:
    action: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Action' }})
    alexa: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Alexa' }})
    apn: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Apn' }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Body' }})
    data: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Data' }})
    delivery_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeliveryCallbackUrl' }})
    facebook_messenger: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FacebookMessenger' }})
    fcm: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Fcm' }})
    gcm: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Gcm' }})
    identity: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    priority: Optional[shared_notification_enum_priority_enum.NotificationEnumPriorityEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    segment: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Segment' }})
    sms: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Sms' }})
    sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Sound' }})
    tag: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Tag' }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Title' }})
    to_binding: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ToBinding' }})
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
    notify_v1_service_notification: Optional[shared_notify_v1_service_notification.NotifyV1ServiceNotification] = dataclasses.field(default=None)
    
