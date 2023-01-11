import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CiscoSntc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * exportAssetsCiscoCsv - Cisco serial number and model name export for Cisco Smart Net Total Care Service.
    **/
    exportAssetsCiscoCsv(req: operations.ExportAssetsCiscoCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportAssetsCiscoCsvResponse>;
}
