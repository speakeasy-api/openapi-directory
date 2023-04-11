import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetAccountInfoResponseProviderUserInfo extends SpeakeasyBase {
    /**
     * The user's display name at the IDP.
     */
    displayName?: string;
    /**
     * User's identifier at IDP.
     */
    federatedId?: string;
    /**
     * The user's photo url at the IDP.
     */
    photoUrl?: string;
    /**
     * The IdP ID. For whitelisted IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
     */
    providerId?: string;
}
/**
 * Respone of setting the account information.
 */
export declare class SetAccountInfoResponse extends SpeakeasyBase {
    /**
     * The name of the user.
     */
    displayName?: string;
    /**
     * The email of the user.
     */
    email?: string;
    /**
     * If email has been verified.
     */
    emailVerified?: boolean;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;
    /**
     * The Gitkit id token to login the newly sign up user.
     */
    idToken?: string;
    /**
     * The fixed string "identitytoolkit#SetAccountInfoResponse".
     */
    kind?: string;
    /**
     * The local ID of the user.
     */
    localId?: string;
    /**
     * The new email the user attempts to change to.
     */
    newEmail?: string;
    /**
     * The user's hashed password.
     */
    passwordHash?: string;
    /**
     * The photo url of the user.
     */
    photoUrl?: string;
    /**
     * The user's profiles at the associated IdPs.
     */
    providerUserInfo?: SetAccountInfoResponseProviderUserInfo[];
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;
}
