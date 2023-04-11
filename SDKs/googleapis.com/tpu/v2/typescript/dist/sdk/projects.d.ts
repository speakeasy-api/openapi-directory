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
     * Lists accelerator types supported by this API.
     */
    tpuProjectsLocationsAcceleratorTypesList(req: operations.TpuProjectsLocationsAcceleratorTypesListRequest, security: operations.TpuProjectsLocationsAcceleratorTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsAcceleratorTypesListResponse>;
    /**
     * Generates the Cloud TPU service identity for the project.
     */
    tpuProjectsLocationsGenerateServiceIdentity(req: operations.TpuProjectsLocationsGenerateServiceIdentityRequest, security: operations.TpuProjectsLocationsGenerateServiceIdentitySecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsGenerateServiceIdentityResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    tpuProjectsLocationsList(req: operations.TpuProjectsLocationsListRequest, security: operations.TpuProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsListResponse>;
    /**
     * Creates a node.
     */
    tpuProjectsLocationsNodesCreate(req: operations.TpuProjectsLocationsNodesCreateRequest, security: operations.TpuProjectsLocationsNodesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesCreateResponse>;
    /**
     * Retrieves the guest attributes for the node.
     */
    tpuProjectsLocationsNodesGetGuestAttributes(req: operations.TpuProjectsLocationsNodesGetGuestAttributesRequest, security: operations.TpuProjectsLocationsNodesGetGuestAttributesSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesGetGuestAttributesResponse>;
    /**
     * Lists nodes.
     */
    tpuProjectsLocationsNodesList(req: operations.TpuProjectsLocationsNodesListRequest, security: operations.TpuProjectsLocationsNodesListSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesListResponse>;
    /**
     * Updates the configurations of a node.
     */
    tpuProjectsLocationsNodesPatch(req: operations.TpuProjectsLocationsNodesPatchRequest, security: operations.TpuProjectsLocationsNodesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesPatchResponse>;
    /**
     * Starts a node.
     */
    tpuProjectsLocationsNodesStart(req: operations.TpuProjectsLocationsNodesStartRequest, security: operations.TpuProjectsLocationsNodesStartSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesStartResponse>;
    /**
     * Stops a node. This operation is only available with single TPU nodes.
     */
    tpuProjectsLocationsNodesStop(req: operations.TpuProjectsLocationsNodesStopRequest, security: operations.TpuProjectsLocationsNodesStopSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsNodesStopResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    tpuProjectsLocationsOperationsCancel(req: operations.TpuProjectsLocationsOperationsCancelRequest, security: operations.TpuProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    tpuProjectsLocationsOperationsDelete(req: operations.TpuProjectsLocationsOperationsDeleteRequest, security: operations.TpuProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsDeleteResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    tpuProjectsLocationsOperationsList(req: operations.TpuProjectsLocationsOperationsListRequest, security: operations.TpuProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsOperationsListResponse>;
    /**
     * Gets a runtime version.
     */
    tpuProjectsLocationsRuntimeVersionsGet(req: operations.TpuProjectsLocationsRuntimeVersionsGetRequest, security: operations.TpuProjectsLocationsRuntimeVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsRuntimeVersionsGetResponse>;
    /**
     * Lists runtime versions supported by this API.
     */
    tpuProjectsLocationsRuntimeVersionsList(req: operations.TpuProjectsLocationsRuntimeVersionsListRequest, security: operations.TpuProjectsLocationsRuntimeVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.TpuProjectsLocationsRuntimeVersionsListResponse>;
}
