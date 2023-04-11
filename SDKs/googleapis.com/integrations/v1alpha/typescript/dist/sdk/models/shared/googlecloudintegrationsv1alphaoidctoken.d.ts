import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OIDC Token
 */
export declare class GoogleCloudIntegrationsV1alphaOidcToken extends SpeakeasyBase {
    /**
     * Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for.
     */
    audience?: string;
    /**
     * The service account email to be used as the identity for the token.
     */
    serviceAccountEmail?: string;
    /**
     * ID token obtained for the service account
     */
    token?: string;
    /**
     * The approximate time until the token retrieved is valid.
     */
    tokenExpireTime?: string;
}
