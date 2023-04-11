import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    cloudbuildProjectsLocationsOperationsCancel(req: operations.CloudbuildProjectsLocationsOperationsCancelRequest, security: operations.CloudbuildProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsOperationsCancelResponse>;
    /**
     * Creates a `WorkerPool` to run the builds, and returns the new worker pool.
     */
    cloudbuildProjectsWorkerPoolsCreate(req: operations.CloudbuildProjectsWorkerPoolsCreateRequest, security: operations.CloudbuildProjectsWorkerPoolsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsCreateResponse>;
    /**
     * Deletes a `WorkerPool`.
     */
    cloudbuildProjectsWorkerPoolsDelete(req: operations.CloudbuildProjectsWorkerPoolsDeleteRequest, security: operations.CloudbuildProjectsWorkerPoolsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsDeleteResponse>;
    /**
     * Returns details of a `WorkerPool`.
     */
    cloudbuildProjectsWorkerPoolsGet(req: operations.CloudbuildProjectsWorkerPoolsGetRequest, security: operations.CloudbuildProjectsWorkerPoolsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsGetResponse>;
    /**
     * Lists `WorkerPool`s by project.
     */
    cloudbuildProjectsWorkerPoolsList(req: operations.CloudbuildProjectsWorkerPoolsListRequest, security: operations.CloudbuildProjectsWorkerPoolsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsListResponse>;
    /**
     * Updates a `WorkerPool`.
     */
    cloudbuildProjectsWorkerPoolsPatch(req: operations.CloudbuildProjectsWorkerPoolsPatchRequest, security: operations.CloudbuildProjectsWorkerPoolsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsPatchResponse>;
}
