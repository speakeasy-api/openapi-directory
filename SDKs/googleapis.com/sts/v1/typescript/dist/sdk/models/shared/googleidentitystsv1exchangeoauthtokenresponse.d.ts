import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for ExchangeOauthToken. see https://www.rfc-editor.org/rfc/rfc6749#section-5.1
 */
export declare class GoogleIdentityStsV1ExchangeOauthTokenResponse extends SpeakeasyBase {
    /**
     * An OAuth 2.0 security token, issued by Google, in response to the Oauth token exchange request for the authorization code and refresh token flows. The returned [access token](https://www.rfc-editor.org/rfc/rfc6749#section-4.1.4). Tokens can vary in size, depending, in part, on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time.
     */
    accessToken?: string;
    /**
     * The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expires.
     */
    expiresIn?: number;
    /**
     * Google issued ID token in response to the OAuth token exchange request for ID token flow.
     */
    idToken?: string;
    /**
     * A refresh token, issued by Google, in response to the OAuth token exchange request for refresh token flow
     */
    refreshToken?: string;
    /**
     * A list of scopes associated with the returned token.
     */
    scope?: string;
    /**
     * The type of token. Field reserved for RFC compliance. See https://www.rfc-editor.org/rfc/rfc6749#section-5.1
     */
    tokenType?: string;
}
