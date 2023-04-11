import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserInfoProviderUserInfo extends SpeakeasyBase {
    /**
     * The user's display name at the IDP.
     */
    displayName?: string;
    /**
     * User's email at IDP.
     */
    email?: string;
    /**
     * User's identifier at IDP.
     */
    federatedId?: string;
    /**
     * User's phone number.
     */
    phoneNumber?: string;
    /**
     * The user's photo url at the IDP.
     */
    photoUrl?: string;
    /**
     * The IdP ID. For white listed IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
     */
    providerId?: string;
    /**
     * User's raw identifier directly returned from IDP.
     */
    rawId?: string;
    /**
     * User's screen name at Twitter or login name at Github.
     */
    screenName?: string;
}
/**
 * Template for an individual account info.
 */
export declare class UserInfo extends SpeakeasyBase {
    /**
     * User creation timestamp.
     */
    createdAt?: string;
    /**
     * The custom attributes to be set in the user's id token.
     */
    customAttributes?: string;
    /**
     * Whether the user is authenticated by the developer.
     */
    customAuth?: boolean;
    /**
     * Whether the user is disabled.
     */
    disabled?: boolean;
    /**
     * The name of the user.
     */
    displayName?: string;
    /**
     * The email of the user.
     */
    email?: string;
    /**
     * Whether the email has been verified.
     */
    emailVerified?: boolean;
    /**
     * last login timestamp.
     */
    lastLoginAt?: string;
    /**
     * The local ID of the user.
     */
    localId?: string;
    /**
     * The user's hashed password.
     */
    passwordHash?: string;
    /**
     * The timestamp when the password was last updated.
     */
    passwordUpdatedAt?: number;
    /**
     * User's phone number.
     */
    phoneNumber?: string;
    /**
     * The URL of the user profile photo.
     */
    photoUrl?: string;
    /**
     * The IDP of the user.
     */
    providerUserInfo?: UserInfoProviderUserInfo[];
    /**
     * The user's plain text password.
     */
    rawPassword?: string;
    /**
     * The user's password salt.
     */
    salt?: string;
    /**
     * User's screen name at Twitter or login name at Github.
     */
    screenName?: string;
    /**
     * Timestamp in seconds for valid login token.
     */
    validSince?: string;
    /**
     * Version of the user's password.
     */
    version?: number;
}
