import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Commission {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCommissions - Returns a commission list of current client.
    **/
    getCommissions(config?: AxiosRequestConfig): Promise<operations.GetCommissionsResponse>;
    /**
     * getCommissionsByFilter - Returns a commission list of current client.
    **/
    getCommissionsByFilter(req: operations.GetCommissionsByFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetCommissionsByFilterResponse>;
}
