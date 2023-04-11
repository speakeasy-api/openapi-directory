import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ChatV2ServiceChannelMessage extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Message resource.
     */
    accountSid?: string;
    /**
     * The JSON string that stores application-specific data. If attributes have not been set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The content of the message.
     */
    body?: string;
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Message resource belongs to.
     */
    channelSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The [Identity](https://www.twilio.com/docs/chat/identity) of the message's author. The default value is `system`.
     */
    from?: string;
    /**
     * The index of the message within the [Channel](https://www.twilio.com/docs/chat/channels). Indices may skip numbers, but will always be in order of when the message was received.
     */
    index?: number;
    /**
     * The [Identity](https://www.twilio.com/docs/chat/identity) of the User who last updated the Message, if applicable.
     */
    lastUpdatedBy?: string;
    /**
     * An object that describes the Message's media, if the message contains media. The object contains these fields: `content_type` with the MIME type of the media, `filename` with the name of the media, `sid` with the SID of the Media resource, and `size` with the media object's file size in bytes. If the Message has no media, this value is `null`.
     */
    media?: any;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the Message resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Message resource.
     */
    sid?: string;
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) that the message was sent to.
     */
    to?: string;
    /**
     * The Message type. Can be: `text` or `media`.
     */
    type?: string;
    /**
     * The absolute URL of the Message resource.
     */
    url?: string;
    /**
     * Whether the message has been edited since it was created.
     */
    wasEdited?: boolean;
}
