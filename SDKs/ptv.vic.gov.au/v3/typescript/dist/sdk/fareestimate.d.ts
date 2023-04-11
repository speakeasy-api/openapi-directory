import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FareEstimate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Estimate a fare by zone
     */
    fareEstimateGetFareEstimateByZone(req: operations.FareEstimateGetFareEstimateByZoneRequest, config?: AxiosRequestConfig): Promise<operations.FareEstimateGetFareEstimateByZoneResponse>;
}
