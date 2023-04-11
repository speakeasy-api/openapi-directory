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
     * Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
     */
    remotebuildexecutionProjectsInstancesCreate(req: operations.RemotebuildexecutionProjectsInstancesCreateRequest, security: operations.RemotebuildexecutionProjectsInstancesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesCreateResponse>;
    /**
     * Lists instances in a project.
     */
    remotebuildexecutionProjectsInstancesList(req: operations.RemotebuildexecutionProjectsInstancesListRequest, security: operations.RemotebuildexecutionProjectsInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesListResponse>;
    /**
     * Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
     */
    remotebuildexecutionProjectsInstancesTestNotify(req: operations.RemotebuildexecutionProjectsInstancesTestNotifyRequest, security: operations.RemotebuildexecutionProjectsInstancesTestNotifySecurity, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesTestNotifyResponse>;
    /**
     * Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
     */
    remotebuildexecutionProjectsInstancesWorkerpoolsCreate(req: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest, security: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse>;
    /**
     * Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
     */
    remotebuildexecutionProjectsInstancesWorkerpoolsDelete(req: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest, security: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse>;
    /**
     * Lists worker pools in an instance.
     */
    remotebuildexecutionProjectsInstancesWorkerpoolsList(req: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest, security: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListSecurity, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse>;
    /**
     * Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
     */
    remotebuildexecutionProjectsInstancesWorkerpoolsPatch(req: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest, security: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    remotebuildexecutionProjectsOperationsGet(req: operations.RemotebuildexecutionProjectsOperationsGetRequest, security: operations.RemotebuildexecutionProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsOperationsGetResponse>;
}
