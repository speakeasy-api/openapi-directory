import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * SSLP Web Service
 */
export declare class Sslp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list SSLP for given position and assembly map
     */
    getMappedSSLPByPositionUsingGET(req: operations.GETMappedSSLPByPositionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETMappedSSLPByPositionUsingGETResponse>;
}
