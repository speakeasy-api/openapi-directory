import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * CreateLocation
     *
     * @remarks
     * Creates a location.
     */
    createLocation(req: shared.CreateLocationRequest, security: operations.CreateLocationSecurity, config?: AxiosRequestConfig): Promise<operations.CreateLocationResponse>;
    /**
     * ListLocations
     *
     * @remarks
     * Provides information of all locations of a business.
     *
     * Many Square API endpoints require a `location_id` parameter.
     * The `id` field of the [`Location`](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) objects returned by this
     * endpoint correspond to that `location_id` parameter.
     */
    listLocations(config?: AxiosRequestConfig): Promise<operations.ListLocationsResponse>;
    /**
     * RetrieveLocation
     *
     * @remarks
     * Retrieves details of a location. You can specify "main"
     * as the location ID to retrieve details of the
     * main location.
     */
    retrieveLocation(req: operations.RetrieveLocationRequest, security: operations.RetrieveLocationSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveLocationResponse>;
    /**
     * UpdateLocation
     *
     * @remarks
     * Updates a location.
     */
    updateLocation(req: operations.UpdateLocationRequest, security: operations.UpdateLocationSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateLocationResponse>;
}
