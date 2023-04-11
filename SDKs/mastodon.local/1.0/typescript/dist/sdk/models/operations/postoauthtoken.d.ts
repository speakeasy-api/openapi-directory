import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOauthTokenRequestBody extends SpeakeasyBase {
    /**
     * Client ID, obtained during app registration
     */
    clientId: string;
    /**
     * Client secret, obtained during app registration
     */
    clientSecret: string;
    /**
     * A user authorization code, obtained via /oauth/authorize
     */
    code?: string;
    /**
     * Set equal to authorization_code if code is provided in order to gain user-level access. Otherwise, set equal to client_credentials to obtain app-level access only.
     */
    grantType: string;
    /**
     * Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the token will be shown instead. Must match one of the redirect URIs declared during app registration.
     */
    redirectUri: string;
    /**
     * List of requested OAuth scopes, separated by spaces. Must be a subset of scopes declared during app registration. If not provided, defaults to read.
     */
    scopes?: string;
}
/**
 * Store this access_token for later use with auth-required methods. The token should be passed as an HTTP Authorization header when making API calls, with the value Bearer access_token
 */
export declare class PostOauthToken200ApplicationJSON extends SpeakeasyBase {
    accessToken?: string;
    /**
     * UNIX timestamp
     */
    createdAt?: number;
    scope?: string;
    tokenType?: string;
}
export declare class PostOauthTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * If you try to request a scope that was not included when registering the app, the request will fail.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Store this access_token for later use with auth-required methods. The token should be passed as an HTTP Authorization header when making API calls, with the value Bearer access_token
     */
    postOauthToken200ApplicationJSONObject?: PostOauthToken200ApplicationJSON;
}
