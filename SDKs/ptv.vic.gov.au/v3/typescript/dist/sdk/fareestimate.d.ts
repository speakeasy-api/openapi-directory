import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FareEstimate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fareEstimateGetFareEstimateByZone - Estimate a fare by zone
    **/
    fareEstimateGetFareEstimateByZone(req: operations.FareEstimateGetFareEstimateByZoneRequest, config?: AxiosRequestConfig): Promise<operations.FareEstimateGetFareEstimateByZoneResponse>;
}
