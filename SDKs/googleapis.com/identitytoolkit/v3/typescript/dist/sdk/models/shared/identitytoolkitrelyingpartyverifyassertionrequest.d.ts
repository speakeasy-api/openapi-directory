import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to verify the IDP assertion.
 */
export declare class IdentitytoolkitRelyingpartyVerifyAssertionRequest extends SpeakeasyBase {
    /**
     * When it's true, automatically creates a new account if the user doesn't exist. When it's false, allows existing user to sign in normally and throws exception if the user doesn't exist.
     */
    autoCreate?: boolean;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;
    /**
     * Instance id token of the app.
     */
    instanceId?: string;
    /**
     * The GITKit token for the non-trusted IDP pending to be confirmed by the user.
     */
    pendingIdToken?: string;
    /**
     * The post body if the request is a HTTP POST.
     */
    postBody?: string;
    /**
     * The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP.
     */
    requestUri?: string;
    /**
     * Whether return 200 and IDP credential rather than throw exception when federated id is already linked.
     */
    returnIdpCredential?: boolean;
    /**
     * Whether to return refresh tokens.
     */
    returnRefreshToken?: boolean;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean;
    /**
     * Session ID, which should match the one in previous createAuthUri request.
     */
    sessionId?: string;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string;
}
