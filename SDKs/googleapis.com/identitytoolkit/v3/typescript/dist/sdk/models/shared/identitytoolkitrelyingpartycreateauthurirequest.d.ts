import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to get the IDP authentication URL.
 */
export declare class IdentitytoolkitRelyingpartyCreateAuthUriRequest extends SpeakeasyBase {
    /**
     * The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS.
     */
    appId?: string;
    /**
     * Explicitly specify the auth flow type. Currently only support "CODE_FLOW" type. The field is only used for Google provider.
     */
    authFlowType?: string;
    /**
     * The relying party OAuth client ID.
     */
    clientId?: string;
    /**
     * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
     */
    context?: string;
    /**
     * The URI to which the IDP redirects the user after the federated login flow.
     */
    continueUri?: string;
    /**
     * The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token.
     */
    customParameter?: Record<string, string>;
    /**
     * The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts.
     */
    hostedDomain?: string;
    /**
     * The email or federated ID of the user.
     */
    identifier?: string;
    /**
     * The developer's consumer key for OpenId OAuth Extension
     */
    oauthConsumerKey?: string;
    /**
     * Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant
     */
    oauthScope?: string;
    /**
     * Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set.
     */
    openidRealm?: string;
    /**
     * The native app package for OTA installation.
     */
    otaApp?: string;
    /**
     * The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
     */
    providerId?: string;
    /**
     * The session_id passed by client.
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
