import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2OAuthResponseType } from "./googlecloudidentitytoolkitadminv2oauthresponsetype";
/**
 * Configuration options for authenticating with an OAuth IDP.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig extends SpeakeasyBase {
    /**
     * The client id of an OAuth client.
     */
    clientId?: string;
    /**
     * The client secret of the OAuth client, to enable OIDC code flow.
     */
    clientSecret?: string;
    /**
     * The config's display name set by developers.
     */
    displayName?: string;
    /**
     * True if allows the user to sign in with the provider.
     */
    enabled?: boolean;
    /**
     * For OIDC Idps, the issuer identifier.
     */
    issuer?: string;
    /**
     * The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
     */
    name?: string;
    /**
     * The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow.
     */
    responseType?: GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
}
