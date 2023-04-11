import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to set the account information.
 */
export declare class IdentitytoolkitRelyingpartySetAccountInfoRequest extends SpeakeasyBase {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string;
    /**
     * The timestamp when the account is created.
     */
    createdAt?: string;
    /**
     * The custom attributes to be set in the user's id token.
     */
    customAttributes?: string;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    /**
     * The attributes users request to delete.
     */
    deleteAttribute?: string[];
    /**
     * The IDPs the user request to delete.
     */
    deleteProvider?: string[];
    /**
     * Whether to disable the user.
     */
    disableUser?: boolean;
    /**
     * The name of the user.
     */
    displayName?: string;
    /**
     * The email of the user.
     */
    email?: string;
    /**
     * Mark the email as verified or not.
     */
    emailVerified?: boolean;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;
    /**
     * Instance id token of the app.
     */
    instanceId?: string;
    /**
     * Last login timestamp.
     */
    lastLoginAt?: string;
    /**
     * The local ID of the user.
     */
    localId?: string;
    /**
     * The out-of-band code of the change email request.
     */
    oobCode?: string;
    /**
     * The new password of the user.
     */
    password?: string;
    /**
     * Privileged caller can update user with specified phone number.
     */
    phoneNumber?: string;
    /**
     * The photo url of the user.
     */
    photoUrl?: string;
    /**
     * The associated IDPs of the user.
     */
    provider?: string[];
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean;
    /**
     * Mark the user to upgrade to federated login.
     */
    upgradeToFederatedLogin?: boolean;
    /**
     * Timestamp in seconds for valid login token.
     */
    validSince?: string;
}
