import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns insights for Business calls for a location.
     */
    mybusinessbusinesscallsLocationsBusinesscallsinsightsList(req: operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse>;
    /**
     * Returns the Business calls settings resource for the given location.
     */
    mybusinessbusinesscallsLocationsGetBusinesscallssettings(req: operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse>;
    /**
     * Updates the Business call settings for the specified location.
     */
    mybusinessbusinesscallsLocationsUpdateBusinesscallssettings(req: operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse>;
}
