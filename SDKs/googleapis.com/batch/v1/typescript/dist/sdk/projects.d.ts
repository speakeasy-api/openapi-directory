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
     * Create a Job.
     */
    batchProjectsLocationsJobsCreate(req: operations.BatchProjectsLocationsJobsCreateRequest, security: operations.BatchProjectsLocationsJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsJobsCreateResponse>;
    /**
     * List all Jobs for a project within a region.
     */
    batchProjectsLocationsJobsList(req: operations.BatchProjectsLocationsJobsListRequest, security: operations.BatchProjectsLocationsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsJobsListResponse>;
    /**
     * List Tasks associated with a job.
     */
    batchProjectsLocationsJobsTaskGroupsTasksList(req: operations.BatchProjectsLocationsJobsTaskGroupsTasksListRequest, security: operations.BatchProjectsLocationsJobsTaskGroupsTasksListSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsJobsTaskGroupsTasksListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    batchProjectsLocationsList(req: operations.BatchProjectsLocationsListRequest, security: operations.BatchProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    batchProjectsLocationsOperationsCancel(req: operations.BatchProjectsLocationsOperationsCancelRequest, security: operations.BatchProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    batchProjectsLocationsOperationsDelete(req: operations.BatchProjectsLocationsOperationsDeleteRequest, security: operations.BatchProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    batchProjectsLocationsOperationsGet(req: operations.BatchProjectsLocationsOperationsGetRequest, security: operations.BatchProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    batchProjectsLocationsOperationsList(req: operations.BatchProjectsLocationsOperationsListRequest, security: operations.BatchProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsOperationsListResponse>;
    /**
     * Report agent's state, e.g. agent status and tasks information
     */
    batchProjectsLocationsStateReport(req: operations.BatchProjectsLocationsStateReportRequest, security: operations.BatchProjectsLocationsStateReportSecurity, config?: AxiosRequestConfig): Promise<operations.BatchProjectsLocationsStateReportResponse>;
}
