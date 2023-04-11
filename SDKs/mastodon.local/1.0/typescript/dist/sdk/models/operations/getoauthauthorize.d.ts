import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOauthAuthorizeRequest extends SpeakeasyBase {
    /**
     * Client ID, obtained during app registration.
     */
    clientId: string;
    /**
     * Added in 2.6.0. Forces the user to re-login, which is necessary for authorizing with multiple accounts from the same instance.
     */
    forceLogin?: boolean;
    /**
     * Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the authorization code will be shown instead. Must match one of the redirect URIs declared during app registration.
     */
    redirectUri: string;
    /**
     * Should be set equal to code.
     */
    responseType: string;
    /**
     * List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). Must be a subset of scopes declared during app registration. If not provided, defaults to read.
     */
    scope?: string;
}
export declare class GetOauthAuthorizeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * If the authorization code is incorrect or has been used already, the request will fail.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
