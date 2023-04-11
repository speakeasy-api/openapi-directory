import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionNotificationEndpoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified NotificationEndpoint in the given region
     */
    computeRegionNotificationEndpointsDelete(req: operations.ComputeRegionNotificationEndpointsDeleteRequest, security: operations.ComputeRegionNotificationEndpointsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNotificationEndpointsDeleteResponse>;
    /**
     * Returns the specified NotificationEndpoint resource in the given region.
     */
    computeRegionNotificationEndpointsGet(req: operations.ComputeRegionNotificationEndpointsGetRequest, security: operations.ComputeRegionNotificationEndpointsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNotificationEndpointsGetResponse>;
    /**
     * Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
     */
    computeRegionNotificationEndpointsInsert(req: operations.ComputeRegionNotificationEndpointsInsertRequest, security: operations.ComputeRegionNotificationEndpointsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNotificationEndpointsInsertResponse>;
    /**
     * Lists the NotificationEndpoints for a project in the given region.
     */
    computeRegionNotificationEndpointsList(req: operations.ComputeRegionNotificationEndpointsListRequest, security: operations.ComputeRegionNotificationEndpointsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNotificationEndpointsListResponse>;
}
