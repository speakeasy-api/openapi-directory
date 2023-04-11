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
     * Creates a new Evaluation in a given project and location.
     */
    workloadmanagerProjectsLocationsEvaluationsCreate(req: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest, security: operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.WorkloadmanagerProjectsLocationsEvaluationsCreateResponse>;
    /**
     * Lists Evaluations in a given project and location.
     */
    workloadmanagerProjectsLocationsEvaluationsList(req: operations.WorkloadmanagerProjectsLocationsEvaluationsListRequest, security: operations.WorkloadmanagerProjectsLocationsEvaluationsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkloadmanagerProjectsLocationsEvaluationsListResponse>;
    /**
     * Write the data insights to workload manager data warehouse.
     */
    workloadmanagerProjectsLocationsInsightsWriteInsight(req: operations.WorkloadmanagerProjectsLocationsInsightsWriteInsightRequest, security: operations.WorkloadmanagerProjectsLocationsInsightsWriteInsightSecurity, config?: AxiosRequestConfig): Promise<operations.WorkloadmanagerProjectsLocationsInsightsWriteInsightResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    workloadmanagerProjectsLocationsList(req: operations.WorkloadmanagerProjectsLocationsListRequest, security: operations.WorkloadmanagerProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkloadmanagerProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    workloadmanagerProjectsLocationsOperationsCancel(req: operations.WorkloadmanagerProjectsLocationsOperationsCancelRequest, security: operations.WorkloadmanagerProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.WorkloadmanagerProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    workloadmanagerProjectsLocationsOperationsDelete(req: operations.WorkloadmanagerProjectsLocationsOperationsDeleteRequest, security: operations.WorkloadmanagerProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.WorkloadmanagerProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    workloadmanagerProjectsLocationsOperationsGet(req: operations.WorkloadmanagerProjectsLocationsOperationsGetRequest, security: operations.WorkloadmanagerProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.WorkloadmanagerProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    workloadmanagerProjectsLocationsOperationsList(req: operations.WorkloadmanagerProjectsLocationsOperationsListRequest, security: operations.WorkloadmanagerProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkloadmanagerProjectsLocationsOperationsListResponse>;
}
