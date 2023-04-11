import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Hooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing Hook.
     */
    deleteHooksIdJson(req: operations.DeleteHooksIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHooksIdJsonResponse>;
    /**
     * Retrieve all Hooks.
     */
    getHooksJson(req: operations.GetHooksJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetHooksJsonResponse>;
    /**
     * Retrieve a single Hook.
     */
    getHooksIdJson(req: operations.GetHooksIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetHooksIdJsonResponse>;
    /**
     * Create a new Hook.
     */
    postHooksJson(req: operations.PostHooksJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostHooksJsonResponse>;
    /**
     * Update a Hook.
     */
    putHooksIdJson(req: operations.PutHooksIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutHooksIdJsonResponse>;
}
