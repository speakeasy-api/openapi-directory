import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InterconnectRemoteLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locations by making a list() request.
     */
    computeInterconnectRemoteLocationsGet(req: operations.ComputeInterconnectRemoteLocationsGetRequest, security: operations.ComputeInterconnectRemoteLocationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectRemoteLocationsGetResponse>;
    /**
     * Retrieves the list of interconnect remote locations available to the specified project.
     */
    computeInterconnectRemoteLocationsList(req: operations.ComputeInterconnectRemoteLocationsListRequest, security: operations.ComputeInterconnectRemoteLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectRemoteLocationsListResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeInterconnectRemoteLocationsTestIamPermissions(req: operations.ComputeInterconnectRemoteLocationsTestIamPermissionsRequest, security: operations.ComputeInterconnectRemoteLocationsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectRemoteLocationsTestIamPermissionsResponse>;
}
