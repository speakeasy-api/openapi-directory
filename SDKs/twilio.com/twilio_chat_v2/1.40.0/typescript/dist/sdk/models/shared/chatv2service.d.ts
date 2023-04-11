import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ChatV2Service extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
     */
    accountSid?: string;
    /**
     * DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints.
     */
    consumptionReportInterval?: number;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
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
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * An object that describes the limits of the service instance. The `limits` object contains  `channel_members` to describe the members/channel limit and `user_channels` to describe the channels/user limit. `channel_members` can be 1,000 or less, with a default of 250. `user_channels` can be 1,000 or less, with a default value of 100.
     */
    limits?: any;
    /**
     * The absolute URLs of the Service's [Channels](https://www.twilio.com/docs/chat/channels), [Roles](https://www.twilio.com/docs/chat/rest/role-resource), [Bindings](https://www.twilio.com/docs/chat/rest/binding-resource), and [Users](https://www.twilio.com/docs/chat/rest/user-resource).
     */
    links?: Record<string, any>;
    /**
     * An object that describes the properties of media that the service supports. The object contains the `size_limit_mb` property, which describes the size of the largest media file in MB; and the `compatibility_message` property, which contains the message text to send when a media message does not have any text.
     */
    media?: any;
    /**
     * The notification configuration for the Service instance. See [Push Notification Configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
     */
    notifications?: any;
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
     * Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Service instance. The default is `false`.
     */
    reachabilityEnabled?: boolean;
    /**
     * Whether the [Message Consumption Horizon](https://www.twilio.com/docs/chat/consumption-horizon) feature is enabled. The default is `true`.
     */
    readStatusEnabled?: boolean;
    /**
     * The unique string that we created to identify the Service resource.
     */
    sid?: string;
    /**
     * How long in seconds after a `started typing` event until clients should assume that user is no longer typing, even if no `ended typing` message was received.  The default is 5 seconds.
     */
    typingIndicatorTimeout?: number;
    /**
     * The absolute URL of the Service resource.
     */
    url?: string;
    /**
     * The list of webhook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
     */
    webhookFilters?: string[];
    /**
     * The HTTP method to use for calls to the `pre_webhook_url` and `post_webhook_url` webhooks.  Can be: `POST` or `GET` and the default is `POST`. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
     */
    webhookMethod?: string;
}
