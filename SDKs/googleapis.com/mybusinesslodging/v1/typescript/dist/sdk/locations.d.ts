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
     * Returns the Lodging of a specific location.
     */
    mybusinesslodgingLocationsGetLodging(req: operations.MybusinesslodgingLocationsGetLodgingRequest, config?: AxiosRequestConfig): Promise<operations.MybusinesslodgingLocationsGetLodgingResponse>;
    /**
     * Returns the Google updated Lodging of a specific location.
     */
    mybusinesslodgingLocationsLodgingGetGoogleUpdated(req: operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest, config?: AxiosRequestConfig): Promise<operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse>;
    /**
     * Updates the Lodging of a specific location.
     */
    mybusinesslodgingLocationsUpdateLodging(req: operations.MybusinesslodgingLocationsUpdateLodgingRequest, config?: AxiosRequestConfig): Promise<operations.MybusinesslodgingLocationsUpdateLodgingResponse>;
}
