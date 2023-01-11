import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TanzaniaRegions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tanzaniaRegions - Returns all regions present in Tanzania
     *
     * Fetches all regions present in Tanzania and then return a response as json
    **/
    tanzaniaRegions(req: operations.TanzaniaRegionsRequest, config?: AxiosRequestConfig): Promise<operations.TanzaniaRegionsResponse>;
}
