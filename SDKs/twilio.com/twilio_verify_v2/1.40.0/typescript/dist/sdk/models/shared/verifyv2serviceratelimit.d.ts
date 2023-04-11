import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class VerifyV2ServiceRateLimit extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Rate Limit resource.
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
     * Description of this Rate Limit
     */
    description?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * A 34 character string that uniquely identifies this Rate Limit.
     */
    sid?: string;
    /**
     * Provides a unique and addressable name to be assigned to this Rate Limit, assigned by the developer, to be optionally used in addition to SID. **This value should not contain PII.**
     */
    uniqueName?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
