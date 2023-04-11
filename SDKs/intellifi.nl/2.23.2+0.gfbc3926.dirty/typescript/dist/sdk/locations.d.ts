import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `locations` resource is an abstraction for the area around a physical location that items can be localized at.
 *
 * @remarks
 *
 *
 * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360007502554}
 */
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create location
     */
    addLocation(req: shared.LocationInput, config?: AxiosRequestConfig): Promise<operations.AddLocationResponse>;
    /**
     * Delete location
     */
    deleteLocation(req: operations.DeleteLocationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocationResponse>;
    /**
     * Get location
     */
    getLocationById(req: operations.GetLocationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationByIdResponse>;
    /**
     * Get all locations
     */
    getLocations(req: operations.GetLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsResponse>;
    /**
     * Update existing location
     */
    updateLocation(req: operations.UpdateLocationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationResponse>;
}
