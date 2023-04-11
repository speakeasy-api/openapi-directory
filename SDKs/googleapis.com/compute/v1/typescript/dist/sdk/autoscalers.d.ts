import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Autoscalers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of autoscalers.
     */
    computeAutoscalersAggregatedList(req: operations.ComputeAutoscalersAggregatedListRequest, security: operations.ComputeAutoscalersAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAutoscalersAggregatedListResponse>;
    /**
     * Deletes the specified autoscaler.
     */
    computeAutoscalersDelete(req: operations.ComputeAutoscalersDeleteRequest, security: operations.ComputeAutoscalersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAutoscalersDeleteResponse>;
    /**
     * Returns the specified autoscaler resource.
     */
    computeAutoscalersGet(req: operations.ComputeAutoscalersGetRequest, security: operations.ComputeAutoscalersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAutoscalersGetResponse>;
    /**
     * Creates an autoscaler in the specified project using the data included in the request.
     */
    computeAutoscalersInsert(req: operations.ComputeAutoscalersInsertRequest, security: operations.ComputeAutoscalersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAutoscalersInsertResponse>;
    /**
     * Retrieves a list of autoscalers contained within the specified zone.
     */
    computeAutoscalersList(req: operations.ComputeAutoscalersListRequest, security: operations.ComputeAutoscalersListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAutoscalersListResponse>;
    /**
     * Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeAutoscalersPatch(req: operations.ComputeAutoscalersPatchRequest, security: operations.ComputeAutoscalersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAutoscalersPatchResponse>;
    /**
     * Updates an autoscaler in the specified project using the data included in the request.
     */
    computeAutoscalersUpdate(req: operations.ComputeAutoscalersUpdateRequest, security: operations.ComputeAutoscalersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAutoscalersUpdateResponse>;
}
