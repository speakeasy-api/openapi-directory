import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HttpsHealthChecks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified HttpsHealthCheck resource.
     */
    computeHttpsHealthChecksDelete(req: operations.ComputeHttpsHealthChecksDeleteRequest, security: operations.ComputeHttpsHealthChecksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpsHealthChecksDeleteResponse>;
    /**
     * Returns the specified HttpsHealthCheck resource.
     */
    computeHttpsHealthChecksGet(req: operations.ComputeHttpsHealthChecksGetRequest, security: operations.ComputeHttpsHealthChecksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpsHealthChecksGetResponse>;
    /**
     * Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
     */
    computeHttpsHealthChecksInsert(req: operations.ComputeHttpsHealthChecksInsertRequest, security: operations.ComputeHttpsHealthChecksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpsHealthChecksInsertResponse>;
    /**
     * Retrieves the list of HttpsHealthCheck resources available to the specified project.
     */
    computeHttpsHealthChecksList(req: operations.ComputeHttpsHealthChecksListRequest, security: operations.ComputeHttpsHealthChecksListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpsHealthChecksListResponse>;
    /**
     * Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeHttpsHealthChecksPatch(req: operations.ComputeHttpsHealthChecksPatchRequest, security: operations.ComputeHttpsHealthChecksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpsHealthChecksPatchResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeHttpsHealthChecksTestIamPermissions(req: operations.ComputeHttpsHealthChecksTestIamPermissionsRequest, security: operations.ComputeHttpsHealthChecksTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpsHealthChecksTestIamPermissionsResponse>;
    /**
     * Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
     */
    computeHttpsHealthChecksUpdate(req: operations.ComputeHttpsHealthChecksUpdateRequest, security: operations.ComputeHttpsHealthChecksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeHttpsHealthChecksUpdateResponse>;
}
