import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class VerifyV2ServiceRateLimitBucket extends SpeakeasyBase {
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
     * Number of seconds that the rate limit will be enforced over.
     */
    interval?: number;
    /**
     * Maximum number of requests permitted in during the interval.
     */
    max?: number;
    /**
     * The Twilio-provided string that uniquely identifies the Rate Limit resource.
     */
    rateLimitSid?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * A 34 character string that uniquely identifies this Bucket.
     */
    sid?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
