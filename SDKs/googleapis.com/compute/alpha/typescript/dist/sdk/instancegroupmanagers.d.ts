import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InstanceGroupManagers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
     */
    computeInstanceGroupManagersAbandonInstances(req: operations.ComputeInstanceGroupManagersAbandonInstancesRequest, security: operations.ComputeInstanceGroupManagersAbandonInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersAbandonInstancesResponse>;
    /**
     * Retrieves the list of managed instance groups and groups them by zone.
     */
    computeInstanceGroupManagersAggregatedList(req: operations.ComputeInstanceGroupManagersAggregatedListRequest, security: operations.ComputeInstanceGroupManagersAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersAggregatedListResponse>;
    /**
     * Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/or new versions.
     */
    computeInstanceGroupManagersApplyUpdatesToInstances(req: operations.ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest, security: operations.ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersApplyUpdatesToInstancesResponse>;
    /**
     * Creates instances with per-instance configurations in this managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
     */
    computeInstanceGroupManagersCreateInstances(req: operations.ComputeInstanceGroupManagersCreateInstancesRequest, security: operations.ComputeInstanceGroupManagersCreateInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersCreateInstancesResponse>;
    /**
     * Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read Deleting an instance group for more information.
     */
    computeInstanceGroupManagersDelete(req: operations.ComputeInstanceGroupManagersDeleteRequest, security: operations.ComputeInstanceGroupManagersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersDeleteResponse>;
    /**
     * Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
     */
    computeInstanceGroupManagersDeleteInstances(req: operations.ComputeInstanceGroupManagersDeleteInstancesRequest, security: operations.ComputeInstanceGroupManagersDeleteInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersDeleteInstancesResponse>;
    /**
     * Deletes selected per-instance configurations for the managed instance group.
     */
    computeInstanceGroupManagersDeletePerInstanceConfigs(req: operations.ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest, security: operations.ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersDeletePerInstanceConfigsResponse>;
    /**
     * Returns all of the details about the specified managed instance group.
     */
    computeInstanceGroupManagersGet(req: operations.ComputeInstanceGroupManagersGetRequest, security: operations.ComputeInstanceGroupManagersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersGetResponse>;
    /**
     * Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.
     */
    computeInstanceGroupManagersInsert(req: operations.ComputeInstanceGroupManagersInsertRequest, security: operations.ComputeInstanceGroupManagersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersInsertResponse>;
    /**
     * Retrieves a list of managed instance groups that are contained within the specified project and zone.
     */
    computeInstanceGroupManagersList(req: operations.ComputeInstanceGroupManagersListRequest, security: operations.ComputeInstanceGroupManagersListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersListResponse>;
    /**
     * Lists all errors thrown by actions on instances for a given managed instance group. The filter and orderBy query parameters are not supported.
     */
    computeInstanceGroupManagersListErrors(req: operations.ComputeInstanceGroupManagersListErrorsRequest, security: operations.ComputeInstanceGroupManagersListErrorsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersListErrorsResponse>;
    /**
     * Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
     */
    computeInstanceGroupManagersListManagedInstances(req: operations.ComputeInstanceGroupManagersListManagedInstancesRequest, security: operations.ComputeInstanceGroupManagersListManagedInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersListManagedInstancesResponse>;
    /**
     * Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
     */
    computeInstanceGroupManagersListPerInstanceConfigs(req: operations.ComputeInstanceGroupManagersListPerInstanceConfigsRequest, security: operations.ComputeInstanceGroupManagersListPerInstanceConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersListPerInstanceConfigsResponse>;
    /**
     * Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
     */
    computeInstanceGroupManagersPatch(req: operations.ComputeInstanceGroupManagersPatchRequest, security: operations.ComputeInstanceGroupManagersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersPatchResponse>;
    /**
     * Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
     */
    computeInstanceGroupManagersPatchPerInstanceConfigs(req: operations.ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest, security: operations.ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersPatchPerInstanceConfigsResponse>;
    /**
     * Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
     */
    computeInstanceGroupManagersRecreateInstances(req: operations.ComputeInstanceGroupManagersRecreateInstancesRequest, security: operations.ComputeInstanceGroupManagersRecreateInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersRecreateInstancesResponse>;
    /**
     * Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. When resizing down, the instance group arbitrarily chooses the order in which VMs are deleted. The group takes into account some VM attributes when making the selection including: + The status of the VM instance. + The health of the VM instance. + The instance template version the VM is based on. + For regional managed instance groups, the location of the VM instance. This list is subject to change. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
     */
    computeInstanceGroupManagersResize(req: operations.ComputeInstanceGroupManagersResizeRequest, security: operations.ComputeInstanceGroupManagersResizeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersResizeResponse>;
    /**
     * Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
     */
    computeInstanceGroupManagersResizeAdvanced(req: operations.ComputeInstanceGroupManagersResizeAdvancedRequest, security: operations.ComputeInstanceGroupManagersResizeAdvancedSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersResizeAdvancedResponse>;
    /**
     * Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.
     */
    computeInstanceGroupManagersResumeInstances(req: operations.ComputeInstanceGroupManagersResumeInstancesRequest, security: operations.ComputeInstanceGroupManagersResumeInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersResumeInstancesResponse>;
    /**
     * Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.
     */
    computeInstanceGroupManagersSetAutoHealingPolicies(req: operations.ComputeInstanceGroupManagersSetAutoHealingPoliciesRequest, security: operations.ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersSetAutoHealingPoliciesResponse>;
    /**
     * Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
     */
    computeInstanceGroupManagersSetInstanceTemplate(req: operations.ComputeInstanceGroupManagersSetInstanceTemplateRequest, security: operations.ComputeInstanceGroupManagersSetInstanceTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersSetInstanceTemplateResponse>;
    /**
     * Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
     */
    computeInstanceGroupManagersSetTargetPools(req: operations.ComputeInstanceGroupManagersSetTargetPoolsRequest, security: operations.ComputeInstanceGroupManagersSetTargetPoolsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersSetTargetPoolsResponse>;
    /**
     * Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.
     */
    computeInstanceGroupManagersStartInstances(req: operations.ComputeInstanceGroupManagersStartInstancesRequest, security: operations.ComputeInstanceGroupManagersStartInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersStartInstancesResponse>;
    /**
     * Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.
     */
    computeInstanceGroupManagersStopInstances(req: operations.ComputeInstanceGroupManagersStopInstancesRequest, security: operations.ComputeInstanceGroupManagersStopInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersStopInstancesResponse>;
    /**
     * Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.
     */
    computeInstanceGroupManagersSuspendInstances(req: operations.ComputeInstanceGroupManagersSuspendInstancesRequest, security: operations.ComputeInstanceGroupManagersSuspendInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersSuspendInstancesResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeInstanceGroupManagersTestIamPermissions(req: operations.ComputeInstanceGroupManagersTestIamPermissionsRequest, security: operations.ComputeInstanceGroupManagersTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersTestIamPermissionsResponse>;
    /**
     * Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listManagedInstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
     */
    computeInstanceGroupManagersUpdate(req: operations.ComputeInstanceGroupManagersUpdateRequest, security: operations.ComputeInstanceGroupManagersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersUpdateResponse>;
    /**
     * Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
     */
    computeInstanceGroupManagersUpdatePerInstanceConfigs(req: operations.ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest, security: operations.ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupManagersUpdatePerInstanceConfigsResponse>;
}
