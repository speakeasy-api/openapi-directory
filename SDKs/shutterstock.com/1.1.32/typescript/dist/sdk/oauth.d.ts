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
     * Authorize applications
     *
     * @remarks
     * This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
     */
    authorize(req: operations.AuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizeResponse>;
    /**
     * Get access tokens
     *
     * @remarks
     * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
     */
    createAccessTokenForm(req: operations.CreateAccessTokenApplicationXWwwFormUrlencoded, config?: AxiosRequestConfig): Promise<operations.CreateAccessTokenFormResponse>;
    /**
     * Get access tokens
     *
     * @remarks
     * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
     */
    createAccessTokenJson(req: operations.CreateAccessTokenApplicationJSON, config?: AxiosRequestConfig): Promise<operations.CreateAccessTokenJsonResponse>;
}
