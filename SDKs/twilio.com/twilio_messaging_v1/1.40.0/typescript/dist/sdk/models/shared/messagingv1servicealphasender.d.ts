import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class MessagingV1ServiceAlphaSender extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AlphaSender resource.
     */
    accountSid?: string;
    /**
     * The Alphanumeric Sender ID string.
     */
    alphaSender?: string;
    /**
     * An array of values that describe whether the number can receive calls or messages. Can be: `SMS`.
     */
    capabilities?: string[];
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the AlphaSender resource.
     */
    sid?: string;
    /**
     * The absolute URL of the AlphaSender resource.
     */
    url?: string;
}
