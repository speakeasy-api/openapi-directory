import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ZoneQueuedResources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of all of the queued resources in a project across all zones.
     */
    computeZoneQueuedResourcesAggregatedList(req: operations.ComputeZoneQueuedResourcesAggregatedListRequest, security: operations.ComputeZoneQueuedResourcesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneQueuedResourcesAggregatedListResponse>;
    /**
     * Cancels a QueuedResource. Only a resource in ACCEPTED state may be cancelled.
     */
    computeZoneQueuedResourcesCancel(req: operations.ComputeZoneQueuedResourcesCancelRequest, security: operations.ComputeZoneQueuedResourcesCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneQueuedResourcesCancelResponse>;
    /**
     * Deletes a QueuedResource. For a QueuedResource in ACCEPTED state, call cancel on the resource before deleting, to make sure no VMs have been provisioned and may require cleaning up. For a QueuedResource in PROVISIONING state the request to delete is registered for execution following the provisioning.
     */
    computeZoneQueuedResourcesDelete(req: operations.ComputeZoneQueuedResourcesDeleteRequest, security: operations.ComputeZoneQueuedResourcesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneQueuedResourcesDeleteResponse>;
    /**
     * Returns the specified QueuedResource resource.
     */
    computeZoneQueuedResourcesGet(req: operations.ComputeZoneQueuedResourcesGetRequest, security: operations.ComputeZoneQueuedResourcesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneQueuedResourcesGetResponse>;
    /**
     * Creates a QueuedResource.
     */
    computeZoneQueuedResourcesInsert(req: operations.ComputeZoneQueuedResourcesInsertRequest, security: operations.ComputeZoneQueuedResourcesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneQueuedResourcesInsertResponse>;
    /**
     * Retrieves the list of QueuedResource resources.
     */
    computeZoneQueuedResourcesList(req: operations.ComputeZoneQueuedResourcesListRequest, security: operations.ComputeZoneQueuedResourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneQueuedResourcesListResponse>;
}
