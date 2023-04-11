import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Auth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve an access token
     *
     * @remarks
     * MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call.
     *
     */
    getAccessToken(req: shared.TokenRequest, security: operations.GetAccessTokenSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccessTokenResponse>;
}
