import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to verify the password.
 */
export declare class IdentitytoolkitRelyingpartyVerifyPasswordRequest extends SpeakeasyBase {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    /**
     * The email of the user.
     */
    email?: string;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;
    /**
     * Instance id token of the app.
     */
    instanceId?: string;
    /**
     * The password inputed by the user.
     */
    password?: string;
    /**
     * The GITKit token for the non-trusted IDP, which is to be confirmed by the user.
     */
    pendingIdToken?: string;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string;
}
