import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BikePoint {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the bike point with the given id.
     */
    bikePointGet(req: operations.BikePointGetRequest, config?: AxiosRequestConfig): Promise<operations.BikePointGetResponse>;
    /**
     * Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
     *             numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
     */
    bikePointGetAll(config?: AxiosRequestConfig): Promise<operations.BikePointGetAllResponse>;
    /**
     * Search for bike stations by their name, a bike point's name often contains information about the name of the street
     *             or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
     *             or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.
     */
    bikePointSearch(req: operations.BikePointSearchRequest, config?: AxiosRequestConfig): Promise<operations.BikePointSearchResponse>;
}
