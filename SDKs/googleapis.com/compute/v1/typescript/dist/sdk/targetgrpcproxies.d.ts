import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetGrpcProxies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified TargetGrpcProxy in the given scope
     */
    computeTargetGrpcProxiesDelete(req: operations.ComputeTargetGrpcProxiesDeleteRequest, security: operations.ComputeTargetGrpcProxiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetGrpcProxiesDeleteResponse>;
    /**
     * Returns the specified TargetGrpcProxy resource in the given scope.
     */
    computeTargetGrpcProxiesGet(req: operations.ComputeTargetGrpcProxiesGetRequest, security: operations.ComputeTargetGrpcProxiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetGrpcProxiesGetResponse>;
    /**
     * Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.
     */
    computeTargetGrpcProxiesInsert(req: operations.ComputeTargetGrpcProxiesInsertRequest, security: operations.ComputeTargetGrpcProxiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetGrpcProxiesInsertResponse>;
    /**
     * Lists the TargetGrpcProxies for a project in the given scope.
     */
    computeTargetGrpcProxiesList(req: operations.ComputeTargetGrpcProxiesListRequest, security: operations.ComputeTargetGrpcProxiesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetGrpcProxiesListResponse>;
    /**
     * Patches the specified TargetGrpcProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computeTargetGrpcProxiesPatch(req: operations.ComputeTargetGrpcProxiesPatchRequest, security: operations.ComputeTargetGrpcProxiesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetGrpcProxiesPatchResponse>;
}
