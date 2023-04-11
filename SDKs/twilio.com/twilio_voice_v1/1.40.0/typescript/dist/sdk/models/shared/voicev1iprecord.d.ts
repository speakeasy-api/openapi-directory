import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class VoiceV1IpRecord extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IP Record resource.
     */
    accountSid?: string;
    /**
     * An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32.
     */
    cidrPrefixLength?: number;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * An IP address in dotted decimal notation, IPv4 only.
     */
    ipAddress?: string;
    /**
     * The unique string that we created to identify the IP Record resource.
     */
    sid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
