import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HttpHealthChecks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified HttpHealthCheck resource.
     */
    computeHttpHealthChecksDelete(req: operations.ComputeHttpHealthChecksDeleteRequest, security: operations.ComputeHttpHealthChecksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpHealthChecksDeleteResponse>;
    /**
     * Returns the specified HttpHealthCheck resource.
     */
    computeHttpHealthChecksGet(req: operations.ComputeHttpHealthChecksGetRequest, security: operations.ComputeHttpHealthChecksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpHealthChecksGetResponse>;
    /**
     * Creates a HttpHealthCheck resource in the specified project using the data included in the request.
     */
    computeHttpHealthChecksInsert(req: operations.ComputeHttpHealthChecksInsertRequest, security: operations.ComputeHttpHealthChecksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpHealthChecksInsertResponse>;
    /**
     * Retrieves the list of HttpHealthCheck resources available to the specified project.
     */
    computeHttpHealthChecksList(req: operations.ComputeHttpHealthChecksListRequest, security: operations.ComputeHttpHealthChecksListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpHealthChecksListResponse>;
    /**
     * Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeHttpHealthChecksPatch(req: operations.ComputeHttpHealthChecksPatchRequest, security: operations.ComputeHttpHealthChecksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpHealthChecksPatchResponse>;
    /**
     * Updates a HttpHealthCheck resource in the specified project using the data included in the request.
     */
    computeHttpHealthChecksUpdate(req: operations.ComputeHttpHealthChecksUpdateRequest, security: operations.ComputeHttpHealthChecksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpHealthChecksUpdateResponse>;
}
