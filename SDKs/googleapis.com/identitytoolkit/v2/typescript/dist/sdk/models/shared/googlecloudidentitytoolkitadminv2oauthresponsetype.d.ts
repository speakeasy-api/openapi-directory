import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2OAuthResponseType extends SpeakeasyBase {
    /**
     * If true, authorization code is returned from IdP's authorization endpoint.
     */
    code?: boolean;
    /**
     * If true, ID token is returned from IdP's authorization endpoint.
     */
    idToken?: boolean;
    /**
     * Do not use. The `token` response type is not supported at the moment.
     */
    token?: boolean;
}
