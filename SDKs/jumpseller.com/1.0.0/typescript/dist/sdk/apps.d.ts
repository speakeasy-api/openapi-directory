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
     * Delete an existing JSApp.
     */
    deleteJsappsCodeJson(req: operations.DeleteJsappsCodeJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJsappsCodeJsonResponse>;
    /**
     * Retrieve all the Store's JSApps.
     */
    getJsappsJson(req: operations.GetJsappsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetJsappsJsonResponse>;
    /**
     * Retrieve a JSApp.
     */
    getJsappsCodeJson(req: operations.GetJsappsCodeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetJsappsCodeJsonResponse>;
    /**
     * Create a Store JSApp.
     */
    postJsappsJson(req: operations.PostJsappsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostJsappsJsonResponse>;
}
