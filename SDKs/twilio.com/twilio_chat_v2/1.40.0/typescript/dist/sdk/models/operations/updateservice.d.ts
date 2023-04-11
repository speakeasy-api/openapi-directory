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
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    /**
     * DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints.
     */
    consumptionReportInterval?: number;
    /**
     * The channel role assigned to a channel creator when they join a new channel. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
     */
    defaultChannelCreatorRoleSid?: string;
    /**
     * The channel role assigned to users when they are added to a channel. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
     */
    defaultChannelRoleSid?: string;
    /**
     * The service role assigned to users when they are added to the service. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
     */
    defaultServiceRoleSid?: string;
    /**
     * A descriptive string that you create to describe the resource.
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
     * The message to send when a media message has no text. Can be used as placeholder message.
     */
    mediaCompatibilityMessage?: string;
    /**
     * Whether to send a notification when a member is added to a channel. The default is `false`.
     */
    notificationsAddedToChannelEnabled?: boolean;
    /**
     * The name of the sound to play when a member is added to a channel and `notifications.added_to_channel.enabled` is `true`.
     */
    notificationsAddedToChannelSound?: string;
    /**
     * The template to use to create the notification text displayed when a member is added to a channel and `notifications.added_to_channel.enabled` is `true`.
     */
    notificationsAddedToChannelTemplate?: string;
    /**
     * Whether to send a notification when a user is invited to a channel. The default is `false`.
     */
    notificationsInvitedToChannelEnabled?: boolean;
    /**
     * The name of the sound to play when a user is invited to a channel and `notifications.invited_to_channel.enabled` is `true`.
     */
    notificationsInvitedToChannelSound?: string;
    /**
     * The template to use to create the notification text displayed when a user is invited to a channel and `notifications.invited_to_channel.enabled` is `true`.
     */
    notificationsInvitedToChannelTemplate?: string;
    /**
     * Whether to log notifications. The default is `false`.
     */
    notificationsLogEnabled?: boolean;
    /**
     * Whether the new message badge is enabled. The default is `false`.
     */
    notificationsNewMessageBadgeCountEnabled?: boolean;
    /**
     * Whether to send a notification when a new message is added to a channel. The default is `false`.
     */
    notificationsNewMessageEnabled?: boolean;
    /**
     * The name of the sound to play when a new message is added to a channel and `notifications.new_message.enabled` is `true`.
     */
    notificationsNewMessageSound?: string;
    /**
     * The template to use to create the notification text displayed when a new message is added to a channel and `notifications.new_message.enabled` is `true`.
     */
    notificationsNewMessageTemplate?: string;
    /**
     * Whether to send a notification to a user when they are removed from a channel. The default is `false`.
     */
    notificationsRemovedFromChannelEnabled?: boolean;
    /**
     * The name of the sound to play to a user when they are removed from a channel and `notifications.removed_from_channel.enabled` is `true`.
     */
    notificationsRemovedFromChannelSound?: string;
    /**
     * The template to use to create the notification text displayed to a user when they are removed from a channel and `notifications.removed_from_channel.enabled` is `true`.
     */
    notificationsRemovedFromChannelTemplate?: string;
    /**
     * The number of times to retry a call to the `post_webhook_url` if the request times out (after 5 seconds) or it receives a 429, 503, or 504 HTTP response. The default is 0, which means the call won't be retried.
     */
    postWebhookRetryCount?: number;
    /**
     * The URL for post-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
     */
    postWebhookUrl?: string;
    /**
     * The number of times to retry a call to the `pre_webhook_url` if the request times out (after 5 seconds) or it receives a 429, 503, or 504 HTTP response. Default retry count is 0 times, which means the call won't be retried.
     */
    preWebhookRetryCount?: number;
    /**
     * The URL for pre-event webhooks, which are called by using the `webhook_method`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
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
     * The list of webhook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
     */
    webhookFilters?: string[];
    /**
     * The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
     */
    webhookMethod?: UpdateServiceUpdateServiceRequestWebhookMethodEnum;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    /**
     * The SID of the Service resource to update.
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
    chatV2Service?: shared.ChatV2Service;
}
