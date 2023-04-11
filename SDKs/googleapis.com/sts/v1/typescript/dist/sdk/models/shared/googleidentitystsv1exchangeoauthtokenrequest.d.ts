import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ExchangeOauthToken
 */
export declare class GoogleIdentityStsV1ExchangeOauthTokenRequest extends SpeakeasyBase {
    /**
     * Optional. The client identifier for the OAuth 2.0 client that requested the provided token. It is REQUIRED when the [client] (https://www.rfc-editor.org/rfc/rfc6749#section-1.1) is not authenticating with the authorization server, i.e. when authentication method is [client authentication] (https://www.rfc-editor.org/rfc/rfc6749#section-3.2.1).
     */
    clientId?: string;
    /**
     * Optional. The authorization code that was previously from workforce identity federation's `authorize` endpoint. Required if the flow is authorization code flow, i.e. if grant_type is 'authorization_code'
     */
    code?: string;
    /**
     * Optional. The code verifier for the PKCE request, Google Cloud CLI originally generates it before the authorization request. PKCE is used to protect authorization code from interception attacks. See https://www.rfc-editor.org/rfc/rfc7636#section-1.1 and https://www.rfc-editor.org/rfc/rfc7636#section-3. It is required when the flow is authorization code flow, i.e. if grant_type is 'authorization_code'
     */
    codeVerifier?: string;
    /**
     * Required. The grant types are as follows: - 'authorization_code' : an authorization code flow, i.e. exchange of authorization code for the Oauth access token - 'refresh_token' : a refresh token flow, i.e. obtain a new access token by providing the refresh token. See https://www.rfc-editor.org/rfc/rfc6749#section-6
     */
    grantType?: string;
    /**
     * Optional. redirect_url is required when the flow is authorization code flow i.e. if grant_type is `authorization_code` See https://www.rfc-editor.org/rfc/rfc6749#section-4.1.3
     */
    redirectUri?: string;
    /**
     * Optional. The Refresh token is the credential that is used to obtain a new access token when the current access token becomes invalid or expires. Required when using refresh token flow, i.e. if `grant_type` is 'refresh_token' See https://www.rfc-editor.org/rfc/rfc6749#section-1.5 and https://www.rfc-editor.org/rfc/rfc6749#section-6
     */
    refreshToken?: string;
    /**
     * Optional. An optional list of scopes that are requested for the token to be returned. See https://www.rfc-editor.org/rfc/rfc6749#section-3.3 Must be a list of space-delimited, case-sensitive strings. Note: Currently, the scopes in the request are not supported
     */
    scope?: string;
}
