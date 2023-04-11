import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://bulkexports.twilio.com"];
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
 * This is the public Twilio REST API.
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
    createExportCustomJob(req: operations.CreateExportCustomJobRequest, security: operations.CreateExportCustomJobSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateExportCustomJobResponse>;
    deleteJob(req: operations.DeleteJobRequest, security: operations.DeleteJobSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     * Fetch a specific Day.
     */
    fetchDay(req: operations.FetchDayRequest, security: operations.FetchDaySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDayResponse>;
    /**
     * Fetch a specific Export.
     */
    fetchExport(req: operations.FetchExportRequest, security: operations.FetchExportSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchExportResponse>;
    /**
     * Fetch a specific Export Configuration.
     */
    fetchExportConfiguration(req: operations.FetchExportConfigurationRequest, security: operations.FetchExportConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchExportConfigurationResponse>;
    fetchJob(req: operations.FetchJobRequest, security: operations.FetchJobSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchJobResponse>;
    /**
     * Retrieve a list of all Days for a resource.
     */
    listDay(req: operations.ListDayRequest, security: operations.ListDaySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDayResponse>;
    listExportCustomJob(req: operations.ListExportCustomJobRequest, security: operations.ListExportCustomJobSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListExportCustomJobResponse>;
    /**
     * Update a specific Export Configuration.
     */
    updateExportConfiguration(req: operations.UpdateExportConfigurationRequest, security: operations.UpdateExportConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateExportConfigurationResponse>;
}
