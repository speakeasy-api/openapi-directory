import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionAutoscalers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified autoscaler.
     */
    computeRegionAutoscalersDelete(req: operations.ComputeRegionAutoscalersDeleteRequest, security: operations.ComputeRegionAutoscalersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionAutoscalersDeleteResponse>;
    /**
     * Returns the specified autoscaler.
     */
    computeRegionAutoscalersGet(req: operations.ComputeRegionAutoscalersGetRequest, security: operations.ComputeRegionAutoscalersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionAutoscalersGetResponse>;
    /**
     * Creates an autoscaler in the specified project using the data included in the request.
     */
    computeRegionAutoscalersInsert(req: operations.ComputeRegionAutoscalersInsertRequest, security: operations.ComputeRegionAutoscalersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionAutoscalersInsertResponse>;
    /**
     * Retrieves a list of autoscalers contained within the specified region.
     */
    computeRegionAutoscalersList(req: operations.ComputeRegionAutoscalersListRequest, security: operations.ComputeRegionAutoscalersListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionAutoscalersListResponse>;
    /**
     * Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeRegionAutoscalersPatch(req: operations.ComputeRegionAutoscalersPatchRequest, security: operations.ComputeRegionAutoscalersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionAutoscalersPatchResponse>;
    /**
     * Updates an autoscaler in the specified project using the data included in the request.
     */
    computeRegionAutoscalersUpdate(req: operations.ComputeRegionAutoscalersUpdateRequest, security: operations.ComputeRegionAutoscalersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionAutoscalersUpdateResponse>;
}
