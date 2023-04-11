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
    videointelligenceProjectsLocationsOperationsCancel(req: operations.VideointelligenceProjectsLocationsOperationsCancelRequest, security: operations.VideointelligenceProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.VideointelligenceProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    videointelligenceProjectsLocationsOperationsDelete(req: operations.VideointelligenceProjectsLocationsOperationsDeleteRequest, security: operations.VideointelligenceProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VideointelligenceProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    videointelligenceProjectsLocationsOperationsGet(req: operations.VideointelligenceProjectsLocationsOperationsGetRequest, security: operations.VideointelligenceProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.VideointelligenceProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    videointelligenceProjectsLocationsOperationsList(req: operations.VideointelligenceProjectsLocationsOperationsListRequest, security: operations.VideointelligenceProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.VideointelligenceProjectsLocationsOperationsListResponse>;
}
