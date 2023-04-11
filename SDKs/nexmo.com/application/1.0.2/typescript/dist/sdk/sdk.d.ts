import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/v1/applications"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * <div class="Vlt-callout Vlt-callout--critical"> <i></i> <div class="Vlt-callout__content">
 *
 * @remarks
 *   <h4>Applications V1 is deprecated</h4>
 *   This version of the API has been deprecated. Please use <a href="/api/application.v2">version 2</a> going forwards
 * </div> </div>
 * A Nexmo application contains the security and configuration information you need to connect to Nexmo endpoints and easily use our products.
 *
 * @see {@link https://developer.nexmo.com/api/developer/application}
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
     * Create Application
     *
     * @remarks
     * You use a `POST` request to create a new application.
     */
    createApplication(req: operations.CreateApplicationRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Destroy Application
     *
     * @remarks
     * You use a `DELETE` request to delete a single application.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Retrieve Application
     *
     * @remarks
     * You use a `GET` request to retrieve details about a single application.
     */
    retrieveApplication(req: operations.RetrieveApplicationRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApplicationResponse>;
    /**
     * Retrieve all Applications
     *
     * @remarks
     * You use a `GET` request to retrieve details of all applications associated with your account.
     */
    retrieveApplications(req: operations.RetrieveApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApplicationsResponse>;
    /**
     * Update Application
     *
     * @remarks
     * You use a `PUT` request to update an existing application.
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
}
