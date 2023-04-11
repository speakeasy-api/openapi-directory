import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Zones {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the specified Zone resource.
     */
    computeZonesGet(req: operations.ComputeZonesGetRequest, security: operations.ComputeZonesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZonesGetResponse>;
    /**
     * Retrieves the list of Zone resources available to the specified project.
     */
    computeZonesList(req: operations.ComputeZonesListRequest, security: operations.ComputeZonesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZonesListResponse>;
}
