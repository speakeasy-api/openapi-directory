import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TrunkingV1TrunkOriginationUrl extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OriginationUrl resource.
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
     * Whether the URL is enabled. The default is `true`.
     */
    enabled?: boolean;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The relative importance of the URI. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important URI.
     */
    priority?: number;
    /**
     * The unique string that we created to identify the OriginationUrl resource.
     */
    sid?: string;
    /**
     * The SIP address you want Twilio to route your Origination calls to. This must be a `sip:` schema.
     */
    sipUrl?: string;
    /**
     * The SID of the Trunk that owns the Origination URL.
     */
    trunkSid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * The value that determines the relative share of the load the URI should receive compared to other URIs with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. URLs with higher values receive more load than those with lower ones with the same priority.
     */
    weight?: number;
}
