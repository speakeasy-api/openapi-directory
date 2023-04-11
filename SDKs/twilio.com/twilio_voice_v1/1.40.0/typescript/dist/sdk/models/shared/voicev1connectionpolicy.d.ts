import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class VoiceV1ConnectionPolicy extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Connection Policy resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Connection Policy resource.
     */
    sid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
