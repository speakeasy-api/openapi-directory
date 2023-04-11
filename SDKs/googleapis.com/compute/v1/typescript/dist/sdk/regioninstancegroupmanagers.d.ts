import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionInstanceGroupManagers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
     */
    computeRegionInstanceGroupManagersAbandonInstances(req: operations.ComputeRegionInstanceGroupManagersAbandonInstancesRequest, security: operations.ComputeRegionInstanceGroupManagersAbandonInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersAbandonInstancesResponse>;
    /**
     * Apply updates to selected instances the managed instance group.
     */
    computeRegionInstanceGroupManagersApplyUpdatesToInstances(req: operations.ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest, security: operations.ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesResponse>;
    /**
     * Creates instances with per-instance configurations in this regional managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
     */
    computeRegionInstanceGroupManagersCreateInstances(req: operations.ComputeRegionInstanceGroupManagersCreateInstancesRequest, security: operations.ComputeRegionInstanceGroupManagersCreateInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersCreateInstancesResponse>;
    /**
     * Deletes the specified managed instance group and all of the instances in that group.
     */
    computeRegionInstanceGroupManagersDelete(req: operations.ComputeRegionInstanceGroupManagersDeleteRequest, security: operations.ComputeRegionInstanceGroupManagersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersDeleteResponse>;
    /**
     * Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. The deleteInstances operation is marked DONE if the deleteInstances request is successful. The underlying actions take additional time. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
     */
    computeRegionInstanceGroupManagersDeleteInstances(req: operations.ComputeRegionInstanceGroupManagersDeleteInstancesRequest, security: operations.ComputeRegionInstanceGroupManagersDeleteInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersDeleteInstancesResponse>;
    /**
     * Deletes selected per-instance configurations for the managed instance group.
     */
    computeRegionInstanceGroupManagersDeletePerInstanceConfigs(req: operations.ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest, security: operations.ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsResponse>;
    /**
     * Returns all of the details about the specified managed instance group.
     */
    computeRegionInstanceGroupManagersGet(req: operations.ComputeRegionInstanceGroupManagersGetRequest, security: operations.ComputeRegionInstanceGroupManagersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersGetResponse>;
    /**
     * Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.
     */
    computeRegionInstanceGroupManagersInsert(req: operations.ComputeRegionInstanceGroupManagersInsertRequest, security: operations.ComputeRegionInstanceGroupManagersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersInsertResponse>;
    /**
     * Retrieves the list of managed instance groups that are contained within the specified region.
     */
    computeRegionInstanceGroupManagersList(req: operations.ComputeRegionInstanceGroupManagersListRequest, security: operations.ComputeRegionInstanceGroupManagersListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersListResponse>;
    /**
     * Lists all errors thrown by actions on instances for a given regional managed instance group. The filter and orderBy query parameters are not supported.
     */
    computeRegionInstanceGroupManagersListErrors(req: operations.ComputeRegionInstanceGroupManagersListErrorsRequest, security: operations.ComputeRegionInstanceGroupManagersListErrorsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersListErrorsResponse>;
    /**
     * Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
     */
    computeRegionInstanceGroupManagersListManagedInstances(req: operations.ComputeRegionInstanceGroupManagersListManagedInstancesRequest, security: operations.ComputeRegionInstanceGroupManagersListManagedInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersListManagedInstancesResponse>;
    /**
     * Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
     */
    computeRegionInstanceGroupManagersListPerInstanceConfigs(req: operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest, security: operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsResponse>;
    /**
     * Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
     */
    computeRegionInstanceGroupManagersPatch(req: operations.ComputeRegionInstanceGroupManagersPatchRequest, security: operations.ComputeRegionInstanceGroupManagersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersPatchResponse>;
    /**
     * Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
     */
    computeRegionInstanceGroupManagersPatchPerInstanceConfigs(req: operations.ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest, security: operations.ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsResponse>;
    /**
     * Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
     */
    computeRegionInstanceGroupManagersRecreateInstances(req: operations.ComputeRegionInstanceGroupManagersRecreateInstancesRequest, security: operations.ComputeRegionInstanceGroupManagersRecreateInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersRecreateInstancesResponse>;
    /**
     * Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
     */
    computeRegionInstanceGroupManagersResize(req: operations.ComputeRegionInstanceGroupManagersResizeRequest, security: operations.ComputeRegionInstanceGroupManagersResizeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersResizeResponse>;
    /**
     * Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
     */
    computeRegionInstanceGroupManagersSetInstanceTemplate(req: operations.ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest, security: operations.ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersSetInstanceTemplateResponse>;
    /**
     * Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
     */
    computeRegionInstanceGroupManagersSetTargetPools(req: operations.ComputeRegionInstanceGroupManagersSetTargetPoolsRequest, security: operations.ComputeRegionInstanceGroupManagersSetTargetPoolsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersSetTargetPoolsResponse>;
    /**
     * Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
     */
    computeRegionInstanceGroupManagersUpdatePerInstanceConfigs(req: operations.ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest, security: operations.ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsResponse>;
}
