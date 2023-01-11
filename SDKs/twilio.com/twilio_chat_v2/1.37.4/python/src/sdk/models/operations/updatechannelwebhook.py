import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import channel_webhook_enum_method_enum as shared_channel_webhook_enum_method_enum
from ..shared import security as shared_security
from ..shared import chat_v2_service_channel_channel_webhook as shared_chat_v2_service_channel_channel_webhook


UPDATE_CHANNEL_WEBHOOK_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class UpdateChannelWebhookPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateChannelWebhookUpdateChannelWebhookRequest:
    configuration_filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared_channel_webhook_enum_method_enum.ChannelWebhookEnumMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.RetryCount' }})
    configuration_triggers: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclasses.dataclass
class UpdateChannelWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateChannelWebhookRequest:
    path_params: UpdateChannelWebhookPathParams = dataclasses.field()
    security: UpdateChannelWebhookSecurity = dataclasses.field()
    request: Optional[UpdateChannelWebhookUpdateChannelWebhookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateChannelWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_service_channel_channel_webhook: Optional[shared_chat_v2_service_channel_channel_webhook.ChatV2ServiceChannelChannelWebhook] = dataclasses.field(default=None)
    
