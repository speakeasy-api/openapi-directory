import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Datacenters are organized by Locations. Datacenters in the same Location are connected with very low latency links.
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
     * Get all Locations
     *
     * @remarks
     * Returns all Location objects.
     */
    getLocations(req: operations.GetLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsResponse>;
    /**
     * Get a Location
     *
     * @remarks
     * Returns a specific Location object.
     */
    getLocationsId(req: operations.GetLocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsIdResponse>;
}
