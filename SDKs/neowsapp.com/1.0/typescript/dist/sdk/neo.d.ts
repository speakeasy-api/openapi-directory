import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations with NearEarthObjects
 */
export declare class Neo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Browse the Near Earth Objects service
     *
     * @remarks
     * Retieve a paginated list of Near Earth Objects
     */
    browseNearEarthObjects(req: operations.BrowseNearEarthObjectsRequest, config?: AxiosRequestConfig): Promise<operations.BrowseNearEarthObjectsResponse>;
    /**
     * Find Near Earth Objects by id
     *
     * @remarks
     * Retrieve a Near Earth Objects with a given id
     */
    retrieveNearEarthObjectById(req: operations.RetrieveNearEarthObjectByIdRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveNearEarthObjectByIdResponse>;
}
