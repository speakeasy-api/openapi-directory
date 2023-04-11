import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InterconnectLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.
     */
    computeInterconnectLocationsGet(req: operations.ComputeInterconnectLocationsGetRequest, security: operations.ComputeInterconnectLocationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectLocationsGetResponse>;
    /**
     * Retrieves the list of interconnect locations available to the specified project.
     */
    computeInterconnectLocationsList(req: operations.ComputeInterconnectLocationsListRequest, security: operations.ComputeInterconnectLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectLocationsListResponse>;
}
