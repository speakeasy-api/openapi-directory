import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Confirm that the app's OAuth2 credentials work.
     */
    getApiV1AppsVerifyCredentials(config?: AxiosRequestConfig): Promise<operations.GetApiV1AppsVerifyCredentialsResponse>;
    /**
     * Create a new application to obtain OAuth2 credentials.
     */
    postApiV1Apps(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.PostApiV1AppsResponse>;
}
