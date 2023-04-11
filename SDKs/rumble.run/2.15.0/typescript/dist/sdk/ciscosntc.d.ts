import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CiscoSNTC {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cisco serial number and model name export for Cisco Smart Net Total Care Service.
     */
    exportAssetsCiscoCSV(req: operations.ExportAssetsCiscoCSVRequest, security: operations.ExportAssetsCiscoCSVSecurity, config?: AxiosRequestConfig): Promise<operations.ExportAssetsCiscoCSVResponse>;
}
