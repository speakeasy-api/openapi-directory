import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service as shared_ip_messaging_v2_service


UPDATE_SERVICE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class UpdateServicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateServiceUpdateServiceRequestWebhookMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateServiceUpdateServiceRequest:
    consumption_report_interval: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ConsumptionReportInterval' }})
    default_channel_creator_role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultChannelCreatorRoleSid' }})
    default_channel_role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultChannelRoleSid' }})
    default_service_role_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultServiceRoleSid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    limits_channel_members: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Limits.ChannelMembers' }})
    limits_user_channels: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Limits.UserChannels' }})
    media_compatibility_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Media.CompatibilityMessage' }})
    notifications_added_to_channel_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Enabled' }})
    notifications_added_to_channel_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Sound' }})
    notifications_added_to_channel_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Template' }})
    notifications_invited_to_channel_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Enabled' }})
    notifications_invited_to_channel_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Sound' }})
    notifications_invited_to_channel_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Template' }})
    notifications_log_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.LogEnabled' }})
    notifications_new_message_badge_count_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.BadgeCountEnabled' }})
    notifications_new_message_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Enabled' }})
    notifications_new_message_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Sound' }})
    notifications_new_message_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Template' }})
    notifications_removed_from_channel_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Enabled' }})
    notifications_removed_from_channel_sound: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Sound' }})
    notifications_removed_from_channel_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Template' }})
    post_webhook_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostWebhookRetryCount' }})
    post_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostWebhookUrl' }})
    pre_webhook_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PreWebhookRetryCount' }})
    pre_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PreWebhookUrl' }})
    reachability_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityEnabled' }})
    read_status_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReadStatusEnabled' }})
    typing_indicator_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TypingIndicatorTimeout' }})
    webhook_filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookFilters' }})
    webhook_method: Optional[UpdateServiceUpdateServiceRequestWebhookMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    

@dataclasses.dataclass
class UpdateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceRequest:
    path_params: UpdateServicePathParams = dataclasses.field()
    security: UpdateServiceSecurity = dataclasses.field()
    request: Optional[UpdateServiceUpdateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_service: Optional[shared_ip_messaging_v2_service.IPMessagingV2Service] = dataclasses.field(default=None)
    
