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
     * Creates a `WorkerPool` to run the builds, and returns the new worker pool. NOTE: As of now, this method returns an `Operation` that is always complete.
     */
    cloudbuildProjectsLocationsWorkerPoolsCreate(req: operations.CloudbuildProjectsLocationsWorkerPoolsCreateRequest, security: operations.CloudbuildProjectsLocationsWorkerPoolsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsCreateResponse>;
    /**
     * Deletes a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.
     */
    cloudbuildProjectsLocationsWorkerPoolsDelete(req: operations.CloudbuildProjectsLocationsWorkerPoolsDeleteRequest, security: operations.CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsDeleteResponse>;
    /**
     * Returns details of a `WorkerPool`.
     */
    cloudbuildProjectsLocationsWorkerPoolsGet(req: operations.CloudbuildProjectsLocationsWorkerPoolsGetRequest, security: operations.CloudbuildProjectsLocationsWorkerPoolsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsGetResponse>;
    /**
     * Lists `WorkerPool`s in the given project.
     */
    cloudbuildProjectsLocationsWorkerPoolsList(req: operations.CloudbuildProjectsLocationsWorkerPoolsListRequest, security: operations.CloudbuildProjectsLocationsWorkerPoolsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsListResponse>;
    /**
     * Updates a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.
     */
    cloudbuildProjectsLocationsWorkerPoolsPatch(req: operations.CloudbuildProjectsLocationsWorkerPoolsPatchRequest, security: operations.CloudbuildProjectsLocationsWorkerPoolsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsPatchResponse>;
}
