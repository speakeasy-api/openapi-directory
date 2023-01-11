import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import configuration_webhook_enum_target_enum as shared_configuration_webhook_enum_target_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_configuration_configuration_webhook as shared_conversations_v1_configuration_configuration_webhook


UPDATE_CONFIGURATION_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateConfigurationWebhookUpdateConfigurationWebhookRequest:
    filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Filters' }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Method' }})
    post_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostWebhookUrl' }})
    pre_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PreWebhookUrl' }})
    target: Optional[shared_configuration_webhook_enum_target_enum.ConfigurationWebhookEnumTargetEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Target' }})
    

@dataclasses.dataclass
class UpdateConfigurationWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConfigurationWebhookRequest:
    security: UpdateConfigurationWebhookSecurity = dataclasses.field()
    request: Optional[UpdateConfigurationWebhookUpdateConfigurationWebhookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConfigurationWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_configuration_configuration_webhook: Optional[shared_conversations_v1_configuration_configuration_webhook.ConversationsV1ConfigurationConfigurationWebhook] = dataclasses.field(default=None)
    
