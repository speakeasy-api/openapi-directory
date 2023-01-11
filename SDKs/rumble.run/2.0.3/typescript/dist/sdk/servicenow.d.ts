import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceNow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * snowExportAssetsCsv - Export an asset inventory as CSV for ServiceNow integration
    **/
    snowExportAssetsCsv(req: operations.SnowExportAssetsCsvRequest, config?: AxiosRequestConfig): Promise<operations.SnowExportAssetsCsvResponse>;
    /**
     * snowExportAssetsJson - Exports the asset inventory as JSON
    **/
    snowExportAssetsJson(req: operations.SnowExportAssetsJsonRequest, config?: AxiosRequestConfig): Promise<operations.SnowExportAssetsJsonResponse>;
    /**
     * snowExportServicesCsv - Export a service inventory as CSV for ServiceNow integration
    **/
    snowExportServicesCsv(req: operations.SnowExportServicesCsvRequest, config?: AxiosRequestConfig): Promise<operations.SnowExportServicesCsvResponse>;
}
