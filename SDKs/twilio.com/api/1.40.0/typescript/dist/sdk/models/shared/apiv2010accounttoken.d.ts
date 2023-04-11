import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiV2010AccountTokenIceServers extends SpeakeasyBase {
    credential?: string;
    url?: string;
    urls?: string;
    username?: string;
}
/**
 * Created
 */
export declare class ApiV2010AccountToken extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Token resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * An array representing the ephemeral credentials and the STUN and TURN server URIs.
     */
    iceServers?: ApiV2010AccountTokenIceServers[];
    /**
     * The temporary password that the username will use when authenticating with Twilio.
     */
    password?: string;
    /**
     * The duration in seconds for which the username and password are valid.
     */
    ttl?: string;
    /**
     * The temporary username that uniquely identifies a Token.
     */
    username?: string;
}
