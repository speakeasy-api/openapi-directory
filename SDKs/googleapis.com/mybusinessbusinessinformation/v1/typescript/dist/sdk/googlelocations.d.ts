import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GoogleLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search all of the possible locations that are a match to the specified request.
     */
    mybusinessbusinessinformationGoogleLocationsSearch(req: operations.MybusinessbusinessinformationGoogleLocationsSearchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationGoogleLocationsSearchResponse>;
}
