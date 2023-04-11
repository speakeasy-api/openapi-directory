import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ChatV1ServiceChannelMember extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Member resource.
     */
    accountSid?: string;
    /**
     * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) for the member.
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
     * The application-defined string that uniquely identifies the resource's [User](https://www.twilio.com/docs/api/chat/rest/users) within the [Service](https://www.twilio.com/docs/api/chat/rest/services). See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info.
     */
    identity?: string;
    /**
     * The index of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) in the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) that the Member has read.
     */
    lastConsumedMessageIndex?: number;
    /**
     * The ISO 8601 timestamp string that represents the date-time of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) read event for the Member within the [Channel](https://www.twilio.com/docs/api/chat/rest/channels).
     */
    lastConsumptionTimestamp?: Date;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the member.
     */
    roleSid?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Member resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Member resource.
     */
    url?: string;
}
