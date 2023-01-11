import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sslp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMappedSslpByPositionUsingGet - Returns a list SSLP for given position and assembly map
    **/
    getMappedSslpByPositionUsingGet(req: operations.GetMappedSslpByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMappedSslpByPositionUsingGetResponse>;
}
