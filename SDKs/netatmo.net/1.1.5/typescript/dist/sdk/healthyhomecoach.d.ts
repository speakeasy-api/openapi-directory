import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Healthy Home Coach specific methods
 */
export declare class Healthyhomecoach {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).
     */
    gethomecoachsdata(req: operations.GethomecoachsdataRequest, security: operations.GethomecoachsdataSecurity, config?: AxiosRequestConfig): Promise<operations.GethomecoachsdataResponse>;
}
