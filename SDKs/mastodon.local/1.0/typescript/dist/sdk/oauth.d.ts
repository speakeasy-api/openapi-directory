import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Oauth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
     */
    getOauthAuthorize(req: operations.GetOauthAuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.GetOauthAuthorizeResponse>;
    /**
     * Revoke an access token to make it no longer valid for use.
     */
    postOauthRevoke(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.PostOauthRevokeResponse>;
    /**
     * Returns an access token, to be used during API calls that are not public.
     */
    postOauthToken(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.PostOauthTokenResponse>;
}
