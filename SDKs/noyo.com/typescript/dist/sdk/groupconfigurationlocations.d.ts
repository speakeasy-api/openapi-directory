import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupConfigurationLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createLocation - Create new Location
     *
     * Create a new location for a group
    **/
    createLocation(req: operations.CreateLocationRequest, config?: AxiosRequestConfig): Promise<operations.CreateLocationResponse>;
    /**
     * editLocation - Edit a Location
     *
     * Edit a location based on the ID provided. The version parameter must match the latest location version.
    **/
    editLocation(req: operations.EditLocationRequest, config?: AxiosRequestConfig): Promise<operations.EditLocationResponse>;
    /**
     * getLocation - Get Location
     *
     * Returns the latest version of a single location based on the ID provided.
    **/
    getLocation(req: operations.GetLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationResponse>;
    /**
     * getLocationList - Get all Group Locations
     *
     * Returns a list of all locations for a given group
    **/
    getLocationList(req: operations.GetLocationListRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationListResponse>;
}
