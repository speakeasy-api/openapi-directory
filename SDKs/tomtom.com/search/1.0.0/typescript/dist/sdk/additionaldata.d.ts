import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AdditionalData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Additional Data
     */
    getSearchVersionNumberAdditionalDataExt(req: operations.GetSearchVersionNumberAdditionalDataExtRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchVersionNumberAdditionalDataExtResponse>;
}
