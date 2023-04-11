import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionTargetTcpProxies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified TargetTcpProxy resource.
     */
    computeRegionTargetTcpProxiesDelete(req: operations.ComputeRegionTargetTcpProxiesDeleteRequest, security: operations.ComputeRegionTargetTcpProxiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetTcpProxiesDeleteResponse>;
    /**
     * Returns the specified TargetTcpProxy resource.
     */
    computeRegionTargetTcpProxiesGet(req: operations.ComputeRegionTargetTcpProxiesGetRequest, security: operations.ComputeRegionTargetTcpProxiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetTcpProxiesGetResponse>;
    /**
     * Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
     */
    computeRegionTargetTcpProxiesInsert(req: operations.ComputeRegionTargetTcpProxiesInsertRequest, security: operations.ComputeRegionTargetTcpProxiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetTcpProxiesInsertResponse>;
    /**
     * Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.
     */
    computeRegionTargetTcpProxiesList(req: operations.ComputeRegionTargetTcpProxiesListRequest, security: operations.ComputeRegionTargetTcpProxiesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetTcpProxiesListResponse>;
}
