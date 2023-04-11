import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/v2/applications"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Vonage provides an Application API to allow management of your Vonage Applications.
 *
 * @remarks
 *
 * This API is backwards compatible with version 1. Applications created using version 1 of the API can also be managed using version 2 (this version) of the API.
 *
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create an application
     */
    createApplication(req: operations.CreateApplicationRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Delete an application
     *
     * @remarks
     * Deleting an application **cannot be undone**.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Get an application
     */
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * List available applications
     */
    listApplication(req: operations.ListApplicationRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationResponse>;
    /**
     * Update an application
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
}
