import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DistrictsInRegion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * districtsInARegion - Returns all districts in region
     *
     * Returns a post code and all districts in a specified region
    **/
    districtsInARegion(req: operations.DistrictsInARegionRequest, config?: AxiosRequestConfig): Promise<operations.DistrictsInARegionResponse>;
}
