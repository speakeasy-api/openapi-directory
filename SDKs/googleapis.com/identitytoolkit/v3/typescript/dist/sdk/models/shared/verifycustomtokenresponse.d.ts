import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response from verifying a custom token
 */
export declare class VerifyCustomTokenResponse extends SpeakeasyBase {
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;
    /**
     * The GITKit token for authenticated user.
     */
    idToken?: string;
    /**
     * True if it's a new user sign-in, false if it's a returning user.
     */
    isNewUser?: boolean;
    /**
     * The fixed string "identitytoolkit#VerifyCustomTokenResponse".
     */
    kind?: string;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;
}
