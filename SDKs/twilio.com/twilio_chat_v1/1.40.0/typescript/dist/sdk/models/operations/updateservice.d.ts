import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhookMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_channel_add.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The URL of the webhook to call in response to the `on_channel_added` event`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_channel_destroy.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_channel_destroyed.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_channel_update.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_channel_updated.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_member_add.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_channel_updated.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_member_remove.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_member_removed.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_message_remove.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_message_removed.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_message_send.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The URL of the webhook to call in response to the `on_message_sent` event`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_message_update.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method to use when calling the `webhooks.on_message_updated.url`.
 */
export declare enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    /**
     * DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints.
     */
    consumptionReportInterval?: number;
    /**
     * The channel role assigned to a channel creator when they join a new channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
     */
    defaultChannelCreatorRoleSid?: string;
    /**
     * The channel role assigned to users when they are added to a channel. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
     */
    defaultChannelRoleSid?: string;
    /**
     * The service role assigned to users when they are added to the service. See the [Roles endpoint](https://www.twilio.com/docs/chat/api/roles) for more details.
     */
    defaultServiceRoleSid?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * The maximum number of Members that can be added to Channels within this Service. Can be up to 1,000.
     */
    limitsChannelMembers?: number;
    /**
     * The maximum number of Channels Users can be a Member of within this Service. Can be up to 1,000.
     */
    limitsUserChannels?: number;
    /**
     * Whether to send a notification when a member is added to a channel. Can be: `true` or `false` and the default is `false`.
     */
    notificationsAddedToChannelEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed when a member is added to a channel and `notifications.added_to_channel.enabled` is `true`.
     */
    notificationsAddedToChannelTemplate?: string;
    /**
     * Whether to send a notification when a user is invited to a channel. Can be: `true` or `false` and the default is `false`.
     */
    notificationsInvitedToChannelEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed when a user is invited to a channel and `notifications.invited_to_channel.enabled` is `true`.
     */
    notificationsInvitedToChannelTemplate?: string;
    /**
     * Whether to send a notification when a new message is added to a channel. Can be: `true` or `false` and the default is `false`.
     */
    notificationsNewMessageEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed when a new message is added to a channel and `notifications.new_message.enabled` is `true`.
     */
    notificationsNewMessageTemplate?: string;
    /**
     * Whether to send a notification to a user when they are removed from a channel. Can be: `true` or `false` and the default is `false`.
     */
    notificationsRemovedFromChannelEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed to a user when they are removed from a channel and `notifications.removed_from_channel.enabled` is `true`.
     */
    notificationsRemovedFromChannelTemplate?: string;
    /**
     * The URL for post-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details.
     */
    postWebhookUrl?: string;
    /**
     * The URL for pre-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/api/chat/webhooks) for more details.
     */
    preWebhookUrl?: string;
    /**
     * Whether to enable the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) for this Service instance. The default is `false`.
     */
    reachabilityEnabled?: boolean;
    /**
     * Whether to enable the [Message Consumption Horizon](https://www.twilio.com/docs/chat/consumption-horizon) feature. The default is `true`.
     */
    readStatusEnabled?: boolean;
    /**
     * How long in seconds after a `started typing` event until clients should assume that user is no longer typing, even if no `ended typing` message was received.  The default is 5 seconds.
     */
    typingIndicatorTimeout?: number;
    /**
     * The list of WebHook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
     */
    webhookFilters?: string[];
    /**
     * The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
     */
    webhookMethod?: UpdateServiceUpdateServiceRequestWebhookMethodEnum;
    /**
     * The HTTP method to use when calling the `webhooks.on_channel_add.url`.
     */
    webhooksOnChannelAddMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_channel_add` event using the `webhooks.on_channel_add.method` HTTP method.
     */
    webhooksOnChannelAddUrl?: string;
    /**
     * The URL of the webhook to call in response to the `on_channel_added` event`.
     */
    webhooksOnChannelAddedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_channel_added` event using the `webhooks.on_channel_added.method` HTTP method.
     */
    webhooksOnChannelAddedUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_channel_destroy.url`.
     */
    webhooksOnChannelDestroyMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_channel_destroy` event using the `webhooks.on_channel_destroy.method` HTTP method.
     */
    webhooksOnChannelDestroyUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_channel_destroyed.url`.
     */
    webhooksOnChannelDestroyedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_channel_added` event using the `webhooks.on_channel_destroyed.method` HTTP method.
     */
    webhooksOnChannelDestroyedUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_channel_update.url`.
     */
    webhooksOnChannelUpdateMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_channel_update` event using the `webhooks.on_channel_update.method` HTTP method.
     */
    webhooksOnChannelUpdateUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_channel_updated.url`.
     */
    webhooksOnChannelUpdatedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_channel_updated` event using the `webhooks.on_channel_updated.method` HTTP method.
     */
    webhooksOnChannelUpdatedUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_member_add.url`.
     */
    webhooksOnMemberAddMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_member_add` event using the `webhooks.on_member_add.method` HTTP method.
     */
    webhooksOnMemberAddUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_channel_updated.url`.
     */
    webhooksOnMemberAddedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_channel_updated` event using the `webhooks.on_channel_updated.method` HTTP method.
     */
    webhooksOnMemberAddedUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_member_remove.url`.
     */
    webhooksOnMemberRemoveMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_member_remove` event using the `webhooks.on_member_remove.method` HTTP method.
     */
    webhooksOnMemberRemoveUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_member_removed.url`.
     */
    webhooksOnMemberRemovedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_member_removed` event using the `webhooks.on_member_removed.method` HTTP method.
     */
    webhooksOnMemberRemovedUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_message_remove.url`.
     */
    webhooksOnMessageRemoveMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_message_remove` event using the `webhooks.on_message_remove.method` HTTP method.
     */
    webhooksOnMessageRemoveUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_message_removed.url`.
     */
    webhooksOnMessageRemovedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_message_removed` event using the `webhooks.on_message_removed.method` HTTP method.
     */
    webhooksOnMessageRemovedUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_message_send.url`.
     */
    webhooksOnMessageSendMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_message_send` event using the `webhooks.on_message_send.method` HTTP method.
     */
    webhooksOnMessageSendUrl?: string;
    /**
     * The URL of the webhook to call in response to the `on_message_sent` event`.
     */
    webhooksOnMessageSentMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_message_sent` event using the `webhooks.on_message_sent.method` HTTP method.
     */
    webhooksOnMessageSentUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_message_update.url`.
     */
    webhooksOnMessageUpdateMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_message_update` event using the `webhooks.on_message_update.method` HTTP method.
     */
    webhooksOnMessageUpdateUrl?: string;
    /**
     * The HTTP method to use when calling the `webhooks.on_message_updated.url`.
     */
    webhooksOnMessageUpdatedMethod?: UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum;
    /**
     * The URL of the webhook to call in response to the `on_message_updated` event using the `webhooks.on_message_updated.method` HTTP method.
     */
    webhooksOnMessageUpdatedUrl?: string;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Service resource to update.
     */
    sid: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV1Service?: shared.ChatV1Service;
}
