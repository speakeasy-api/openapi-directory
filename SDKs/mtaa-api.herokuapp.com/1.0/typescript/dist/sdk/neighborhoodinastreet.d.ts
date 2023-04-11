import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NeighborhoodInAStreet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns all neighborhood in a street
     *
     * @remarks
     * Returns all neighborhood in a specified street
     */
    neighborhoodInAStreet(req: operations.NeighborhoodInAStreetRequest, config?: AxiosRequestConfig): Promise<operations.NeighborhoodInAStreetResponse>;
}
