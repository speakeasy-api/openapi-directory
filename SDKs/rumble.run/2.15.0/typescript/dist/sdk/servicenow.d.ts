import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceNow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Export an asset inventory as CSV for ServiceNow integration
     */
    snowExportAssetsCSV(config?: AxiosRequestConfig): Promise<operations.SnowExportAssetsCSVResponse>;
    /**
     * Exports the asset inventory as JSON
     */
    snowExportAssetsJSON(config?: AxiosRequestConfig): Promise<operations.SnowExportAssetsJSONResponse>;
    /**
     * Export a service inventory as CSV for ServiceNow integration
     */
    snowExportServicesCSV(config?: AxiosRequestConfig): Promise<operations.SnowExportServicesCSVResponse>;
}
