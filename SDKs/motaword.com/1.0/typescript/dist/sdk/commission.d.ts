import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Commission {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a commission list of current client.
     */
    getCommissions(config?: AxiosRequestConfig): Promise<operations.GetCommissionsResponse>;
    /**
     * Returns a commission list of current client.
     */
    getCommissionsByFilter(req: shared.ReportFilter, config?: AxiosRequestConfig): Promise<operations.GetCommissionsByFilterResponse>;
}
