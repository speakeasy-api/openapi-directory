import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ChatV2ServiceChannelChannelWebhook extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Channel Webhook resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Channel Webhook resource belongs to.
     */
    channelSid?: string;
    /**
     * The JSON string that describes how the channel webhook is configured. The configuration object contains the `url`, `method`, `filters`, and `retry_count` values that are configured by the create and update actions.
     */
    configuration?: any;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the Channel Webhook resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Channel Webhook resource.
     */
    sid?: string;
    /**
     * The type of webhook. Can be: `webhook`, `studio`, or `trigger`.
     */
    type?: string;
    /**
     * The absolute URL of the Channel Webhook resource.
     */
    url?: string;
}
