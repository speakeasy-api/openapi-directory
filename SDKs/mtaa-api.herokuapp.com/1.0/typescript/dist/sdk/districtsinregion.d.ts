import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DistrictsInRegion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns all districts in region
     *
     * @remarks
     * Returns a post code and all districts in a specified region
     */
    districtsInARegion(req: operations.DistrictsInARegionRequest, config?: AxiosRequestConfig): Promise<operations.DistrictsInARegionResponse>;
}
