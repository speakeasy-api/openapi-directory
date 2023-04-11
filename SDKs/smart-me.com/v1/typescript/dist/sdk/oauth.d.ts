import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OAuth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    oAuthAuthorize(req: operations.OAuthAuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.OAuthAuthorizeResponse>;
    postApiOauthAuthorize(req: operations.PostApiOauthAuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.PostApiOauthAuthorizeResponse>;
}
