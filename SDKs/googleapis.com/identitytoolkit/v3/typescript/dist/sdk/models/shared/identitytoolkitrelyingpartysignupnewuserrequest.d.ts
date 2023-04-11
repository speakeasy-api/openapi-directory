import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to signup new user, create anonymous user or anonymous user reauth.
 */
export declare class IdentitytoolkitRelyingpartySignupNewUserRequest extends SpeakeasyBase {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string;
    /**
     * Whether to disable the user. Only can be used by service account.
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
     * Mark the email as verified or not. Only can be used by service account.
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
     * Privileged caller can create user with specified user id.
     */
    localId?: string;
    /**
     * The new password of the user.
     */
    password?: string;
    /**
     * Privileged caller can create user with specified phone number.
     */
    phoneNumber?: string;
    /**
     * The photo url of the user.
     */
    photoUrl?: string;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string;
}
