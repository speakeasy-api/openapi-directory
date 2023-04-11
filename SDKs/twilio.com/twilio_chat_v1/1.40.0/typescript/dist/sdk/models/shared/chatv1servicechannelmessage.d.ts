import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ChatV1ServiceChannelMessage extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Message resource.
     */
    accountSid?: string;
    /**
     * The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it's only  displayed in a FETCH action that returns a single resource; otherwise, it's null. If the attributes have not been set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The content of the message.
     */
    body?: string;
    /**
     * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the Message resource belongs to.
     */
    channelSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The [identity](https://www.twilio.com/docs/api/chat/guides/identity) of the message's author. The default value is `system`.
     */
    from?: string;
    /**
     * The index of the message within the [Channel](https://www.twilio.com/docs/chat/api/channels).
     */
    index?: number;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Message resource.
     */
    sid?: string;
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/api/channels) that the message was sent to.
     */
    to?: string;
    /**
     * The absolute URL of the Message resource.
     */
    url?: string;
    /**
     * Whether the message has been edited since it was created.
     */
    wasEdited?: boolean;
}
