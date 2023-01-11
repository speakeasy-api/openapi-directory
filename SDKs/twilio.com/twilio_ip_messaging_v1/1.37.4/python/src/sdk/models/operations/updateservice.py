import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import ip_messaging_v1_service as shared_ip_messaging_v1_service


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

class UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum(str, Enum):
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
    notifications_added_to_channel_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Enabled' }})
    notifications_added_to_channel_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.AddedToChannel.Template' }})
    notifications_invited_to_channel_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Enabled' }})
    notifications_invited_to_channel_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.InvitedToChannel.Template' }})
    notifications_new_message_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Enabled' }})
    notifications_new_message_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.NewMessage.Template' }})
    notifications_removed_from_channel_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Enabled' }})
    notifications_removed_from_channel_template: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Notifications.RemovedFromChannel.Template' }})
    post_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostWebhookUrl' }})
    pre_webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PreWebhookUrl' }})
    reachability_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityEnabled' }})
    read_status_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReadStatusEnabled' }})
    typing_indicator_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TypingIndicatorTimeout' }})
    webhook_filters: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookFilters' }})
    webhook_method: Optional[UpdateServiceUpdateServiceRequestWebhookMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhooks_on_channel_add_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdd.Method' }})
    webhooks_on_channel_add_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdd.Url' }})
    webhooks_on_channel_added_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdded.Method' }})
    webhooks_on_channel_added_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelAdded.Url' }})
    webhooks_on_channel_destroy_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroy.Method' }})
    webhooks_on_channel_destroy_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroy.Url' }})
    webhooks_on_channel_destroyed_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroyed.Method' }})
    webhooks_on_channel_destroyed_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelDestroyed.Url' }})
    webhooks_on_channel_update_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdate.Method' }})
    webhooks_on_channel_update_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdate.Url' }})
    webhooks_on_channel_updated_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdated.Method' }})
    webhooks_on_channel_updated_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnChannelUpdated.Url' }})
    webhooks_on_member_add_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdd.Method' }})
    webhooks_on_member_add_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdd.Url' }})
    webhooks_on_member_added_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdded.Method' }})
    webhooks_on_member_added_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberAdded.Url' }})
    webhooks_on_member_remove_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemove.Method' }})
    webhooks_on_member_remove_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemove.Url' }})
    webhooks_on_member_removed_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemoved.Method' }})
    webhooks_on_member_removed_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMemberRemoved.Url' }})
    webhooks_on_message_remove_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemove.Method' }})
    webhooks_on_message_remove_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemove.Url' }})
    webhooks_on_message_removed_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemoved.Method' }})
    webhooks_on_message_removed_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageRemoved.Url' }})
    webhooks_on_message_send_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSend.Method' }})
    webhooks_on_message_send_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSend.Url' }})
    webhooks_on_message_sent_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSent.Method' }})
    webhooks_on_message_sent_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageSent.Url' }})
    webhooks_on_message_update_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdate.Method' }})
    webhooks_on_message_update_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdate.Url' }})
    webhooks_on_message_updated_method: Optional[UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdated.Method' }})
    webhooks_on_message_updated_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhooks.OnMessageUpdated.Url' }})
    

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
    ip_messaging_v1_service: Optional[shared_ip_messaging_v1_service.IPMessagingV1Service] = dataclasses.field(default=None)
    
