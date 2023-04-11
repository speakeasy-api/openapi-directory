import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class OauthV1Token extends SpeakeasyBase {
    /**
     * Token which carries the necessary information to access a Twilio resource directly.
     */
    accessToken?: string;
    /**
     * The date and time in GMT when the refresh token expires in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    accessTokenExpiresAt?: Date;
    idToken?: string;
    /**
     * Token which carries the information necessary to get a new access token.
     */
    refreshToken?: string;
    /**
     * The date and time in GMT when the refresh token expires in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    refreshTokenExpiresAt?: Date;
}
