import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import notify_v1_service as shared_notify_v1_service


CREATE_SERVICE_SERVERS = [
	"https://notify.twilio.com",
]


@dataclasses.dataclass
class CreateServiceCreateServiceRequest:
    alexa_skill_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AlexaSkillId' }})
    apn_credential_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApnCredentialSid' }})
    default_alexa_notification_protocol_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultAlexaNotificationProtocolVersion' }})
    default_apn_notification_protocol_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultApnNotificationProtocolVersion' }})
    default_fcm_notification_protocol_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultFcmNotificationProtocolVersion' }})
    default_gcm_notification_protocol_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultGcmNotificationProtocolVersion' }})
    delivery_callback_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeliveryCallbackEnabled' }})
    delivery_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeliveryCallbackUrl' }})
    facebook_messenger_page_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FacebookMessengerPageId' }})
    fcm_credential_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FcmCredentialSid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    gcm_credential_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'GcmCredentialSid' }})
    log_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LogEnabled' }})
    messaging_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    

@dataclasses.dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = dataclasses.field()
    request: Optional[CreateServiceCreateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notify_v1_service: Optional[shared_notify_v1_service.NotifyV1Service] = dataclasses.field(default=None)
    
