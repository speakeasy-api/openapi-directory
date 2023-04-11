import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request of verifying the password.
 */
export declare class VerifyPasswordResponse extends SpeakeasyBase {
    /**
     * The name of the user.
     */
    displayName?: string;
    /**
     * The email returned by the IdP. NOTE: The federated login user may not own the email.
     */
    email?: string;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;
    /**
     * The GITKit token for authenticated user.
     */
    idToken?: string;
    /**
     * The fixed string "identitytoolkit#VerifyPasswordResponse".
     */
    kind?: string;
    /**
     * The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
     */
    localId?: string;
    /**
     * The OAuth2 access token.
     */
    oauthAccessToken?: string;
    /**
     * The OAuth2 authorization code.
     */
    oauthAuthorizationCode?: string;
    /**
     * The lifetime in seconds of the OAuth2 access token.
     */
    oauthExpireIn?: number;
    /**
     * The URI of the user's photo at IdP
     */
    photoUrl?: string;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;
    /**
     * Whether the email is registered.
     */
    registered?: boolean;
}
