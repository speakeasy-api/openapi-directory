import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InstanceGroupManagerResizeRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancels the specified resize request and removes it from the queue. Cancelled resize request does no longer wait for the resources to be provisioned. Cancel is only possible for requests that are accepted in the queue.
     */
    computeInstanceGroupManagerResizeRequestsCancel(req: operations.ComputeInstanceGroupManagerResizeRequestsCancelRequest, security: operations.ComputeInstanceGroupManagerResizeRequestsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagerResizeRequestsCancelResponse>;
    /**
     * Deletes the specified, inactive resize request. Requests that are still active cannot be deleted. Deleting request does not delete instances that were provisioned previously.
     */
    computeInstanceGroupManagerResizeRequestsDelete(req: operations.ComputeInstanceGroupManagerResizeRequestsDeleteRequest, security: operations.ComputeInstanceGroupManagerResizeRequestsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagerResizeRequestsDeleteResponse>;
    /**
     * Returns all of the details about the specified resize request.
     */
    computeInstanceGroupManagerResizeRequestsGet(req: operations.ComputeInstanceGroupManagerResizeRequestsGetRequest, security: operations.ComputeInstanceGroupManagerResizeRequestsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagerResizeRequestsGetResponse>;
    /**
     * Creates a new resize request that starts provisioning VMs immediately or queues VM creation.
     */
    computeInstanceGroupManagerResizeRequestsInsert(req: operations.ComputeInstanceGroupManagerResizeRequestsInsertRequest, security: operations.ComputeInstanceGroupManagerResizeRequestsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagerResizeRequestsInsertResponse>;
    /**
     * Retrieves a list of resize requests that are contained in the managed instance group.
     */
    computeInstanceGroupManagerResizeRequestsList(req: operations.ComputeInstanceGroupManagerResizeRequestsListRequest, security: operations.ComputeInstanceGroupManagerResizeRequestsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagerResizeRequestsListResponse>;
}
