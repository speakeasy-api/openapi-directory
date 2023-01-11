import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_configuration_service_webhook_configuration as shared_conversations_v1_service_service_configuration_service_webhook_configuration


UPDATE_SERVICE_WEBHOOK_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceWebhookConfigurationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest:
    filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Filters' }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Method' }})
    post_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostWebhookUrl' }})
    pre_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PreWebhookUrl' }})
    

@dataclasses.dataclass
class UpdateServiceWebhookConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceWebhookConfigurationRequest:
    path_params: UpdateServiceWebhookConfigurationPathParams = dataclasses.field()
    security: UpdateServiceWebhookConfigurationSecurity = dataclasses.field()
    request: Optional[UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceWebhookConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_configuration_service_webhook_configuration: Optional[shared_conversations_v1_service_service_configuration_service_webhook_configuration.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration] = dataclasses.field(default=None)
    
