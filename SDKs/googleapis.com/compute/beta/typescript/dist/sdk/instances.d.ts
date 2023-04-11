import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Instances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds an access config to an instance's network interface.
     */
    computeInstancesAddAccessConfig(req: operations.ComputeInstancesAddAccessConfigRequest, security: operations.ComputeInstancesAddAccessConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesAddAccessConfigResponse>;
    /**
     * Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this instance for scheduling live migrations.
     */
    computeInstancesAddResourcePolicies(req: operations.ComputeInstancesAddResourcePoliciesRequest, security: operations.ComputeInstancesAddResourcePoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesAddResourcePoliciesResponse>;
    /**
     * Retrieves an aggregated list of all of the instances in your project across all regions and zones. The performance of this method degrades when a filter is specified on a project that has a very large number of instances.
     */
    computeInstancesAggregatedList(req: operations.ComputeInstancesAggregatedListRequest, security: operations.ComputeInstancesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesAggregatedListResponse>;
    /**
     * Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.
     */
    computeInstancesAttachDisk(req: operations.ComputeInstancesAttachDiskRequest, security: operations.ComputeInstancesAttachDiskSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesAttachDiskResponse>;
    /**
     * Creates multiple instances. Count specifies the number of instances to create. For more information, see About bulk creation of VMs.
     */
    computeInstancesBulkInsert(req: operations.ComputeInstancesBulkInsertRequest, security: operations.ComputeInstancesBulkInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesBulkInsertResponse>;
    /**
     * Deletes the specified Instance resource. For more information, see Deleting an instance.
     */
    computeInstancesDelete(req: operations.ComputeInstancesDeleteRequest, security: operations.ComputeInstancesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesDeleteResponse>;
    /**
     * Deletes an access config from an instance's network interface.
     */
    computeInstancesDeleteAccessConfig(req: operations.ComputeInstancesDeleteAccessConfigRequest, security: operations.ComputeInstancesDeleteAccessConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesDeleteAccessConfigResponse>;
    /**
     * Detaches a disk from an instance.
     */
    computeInstancesDetachDisk(req: operations.ComputeInstancesDetachDiskRequest, security: operations.ComputeInstancesDetachDiskSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesDetachDiskResponse>;
    /**
     * Returns the specified Instance resource.
     */
    computeInstancesGet(req: operations.ComputeInstancesGetRequest, security: operations.ComputeInstancesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesGetResponse>;
    /**
     * Returns effective firewalls applied to an interface of the instance.
     */
    computeInstancesGetEffectiveFirewalls(req: operations.ComputeInstancesGetEffectiveFirewallsRequest, security: operations.ComputeInstancesGetEffectiveFirewallsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesGetEffectiveFirewallsResponse>;
    /**
     * Returns the specified guest attributes entry.
     */
    computeInstancesGetGuestAttributes(req: operations.ComputeInstancesGetGuestAttributesRequest, security: operations.ComputeInstancesGetGuestAttributesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesGetGuestAttributesResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeInstancesGetIamPolicy(req: operations.ComputeInstancesGetIamPolicyRequest, security: operations.ComputeInstancesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesGetIamPolicyResponse>;
    /**
     * Returns the screenshot from the specified instance.
     */
    computeInstancesGetScreenshot(req: operations.ComputeInstancesGetScreenshotRequest, security: operations.ComputeInstancesGetScreenshotSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesGetScreenshotResponse>;
    /**
     * Returns the last 1 MB of serial port output from the specified instance.
     */
    computeInstancesGetSerialPortOutput(req: operations.ComputeInstancesGetSerialPortOutputRequest, security: operations.ComputeInstancesGetSerialPortOutputSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesGetSerialPortOutputResponse>;
    /**
     * Returns the Shielded Instance Identity of an instance
     */
    computeInstancesGetShieldedInstanceIdentity(req: operations.ComputeInstancesGetShieldedInstanceIdentityRequest, security: operations.ComputeInstancesGetShieldedInstanceIdentitySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesGetShieldedInstanceIdentityResponse>;
    /**
     * Returns the Shielded VM Identity of an instance
     */
    computeInstancesGetShieldedVmIdentity(req: operations.ComputeInstancesGetShieldedVmIdentityRequest, security: operations.ComputeInstancesGetShieldedVmIdentitySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesGetShieldedVmIdentityResponse>;
    /**
     * Creates an instance resource in the specified project using the data included in the request.
     */
    computeInstancesInsert(req: operations.ComputeInstancesInsertRequest, security: operations.ComputeInstancesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesInsertResponse>;
    /**
     * Retrieves the list of instances contained within the specified zone.
     */
    computeInstancesList(req: operations.ComputeInstancesListRequest, security: operations.ComputeInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesListResponse>;
    /**
     * Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is part of a managed or unmanaged instance group, the referrers list includes the instance group. For more information, read Viewing referrers to VM instances.
     */
    computeInstancesListReferrers(req: operations.ComputeInstancesListReferrersRequest, security: operations.ComputeInstancesListReferrersSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesListReferrersResponse>;
    /**
     * Removes resource policies from an instance.
     */
    computeInstancesRemoveResourcePolicies(req: operations.ComputeInstancesRemoveResourcePoliciesRequest, security: operations.ComputeInstancesRemoveResourcePoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesRemoveResourcePoliciesResponse>;
    /**
     * Performs a reset on the instance. This is a hard reset. The VM does not do a graceful shutdown. For more information, see Resetting an instance.
     */
    computeInstancesReset(req: operations.ComputeInstancesResetRequest, security: operations.ComputeInstancesResetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesResetResponse>;
    /**
     * Resumes an instance that was suspended using the instances().suspend method.
     */
    computeInstancesResume(req: operations.ComputeInstancesResumeRequest, security: operations.ComputeInstancesResumeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesResumeResponse>;
    /**
     * Sends diagnostic interrupt to the instance.
     */
    computeInstancesSendDiagnosticInterrupt(req: operations.ComputeInstancesSendDiagnosticInterruptRequest, security: operations.ComputeInstancesSendDiagnosticInterruptSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSendDiagnosticInterruptResponse>;
    /**
     * Sets deletion protection on the instance.
     */
    computeInstancesSetDeletionProtection(req: operations.ComputeInstancesSetDeletionProtectionRequest, security: operations.ComputeInstancesSetDeletionProtectionSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetDeletionProtectionResponse>;
    /**
     * Sets the auto-delete flag for a disk attached to an instance.
     */
    computeInstancesSetDiskAutoDelete(req: operations.ComputeInstancesSetDiskAutoDeleteRequest, security: operations.ComputeInstancesSetDiskAutoDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetDiskAutoDeleteResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeInstancesSetIamPolicy(req: operations.ComputeInstancesSetIamPolicyRequest, security: operations.ComputeInstancesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetIamPolicyResponse>;
    /**
     * Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.
     */
    computeInstancesSetLabels(req: operations.ComputeInstancesSetLabelsRequest, security: operations.ComputeInstancesSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetLabelsResponse>;
    /**
     * Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
     */
    computeInstancesSetMachineResources(req: operations.ComputeInstancesSetMachineResourcesRequest, security: operations.ComputeInstancesSetMachineResourcesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetMachineResourcesResponse>;
    /**
     * Changes the machine type for a stopped instance to the machine type specified in the request.
     */
    computeInstancesSetMachineType(req: operations.ComputeInstancesSetMachineTypeRequest, security: operations.ComputeInstancesSetMachineTypeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetMachineTypeResponse>;
    /**
     * Sets metadata for the specified instance to the data included in the request.
     */
    computeInstancesSetMetadata(req: operations.ComputeInstancesSetMetadataRequest, security: operations.ComputeInstancesSetMetadataSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetMetadataResponse>;
    /**
     * Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.
     */
    computeInstancesSetMinCpuPlatform(req: operations.ComputeInstancesSetMinCpuPlatformRequest, security: operations.ComputeInstancesSetMinCpuPlatformSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetMinCpuPlatformResponse>;
    /**
     * Sets name of an instance.
     */
    computeInstancesSetName(req: operations.ComputeInstancesSetNameRequest, security: operations.ComputeInstancesSetNameSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetNameResponse>;
    /**
     * Sets an instance's scheduling options. You can only call this method on a stopped instance, that is, a VM instance that is in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states. For more information about setting scheduling options for a VM, see Set VM host maintenance policy.
     */
    computeInstancesSetScheduling(req: operations.ComputeInstancesSetSchedulingRequest, security: operations.ComputeInstancesSetSchedulingSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetSchedulingResponse>;
    /**
     * Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
     */
    computeInstancesSetServiceAccount(req: operations.ComputeInstancesSetServiceAccountRequest, security: operations.ComputeInstancesSetServiceAccountSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetServiceAccountResponse>;
    /**
     * Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeInstancesSetShieldedInstanceIntegrityPolicy(req: operations.ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest, security: operations.ComputeInstancesSetShieldedInstanceIntegrityPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetShieldedInstanceIntegrityPolicyResponse>;
    /**
     * Sets the Shielded VM integrity policy for a VM instance. You can only use this method on a running VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeInstancesSetShieldedVmIntegrityPolicy(req: operations.ComputeInstancesSetShieldedVmIntegrityPolicyRequest, security: operations.ComputeInstancesSetShieldedVmIntegrityPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetShieldedVmIntegrityPolicyResponse>;
    /**
     * Sets network tags for the specified instance to the data included in the request.
     */
    computeInstancesSetTags(req: operations.ComputeInstancesSetTagsRequest, security: operations.ComputeInstancesSetTagsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSetTagsResponse>;
    /**
     * Simulates a host maintenance event on a VM. For more information, see Simulate a host maintenance event.
     */
    computeInstancesSimulateMaintenanceEvent(req: operations.ComputeInstancesSimulateMaintenanceEventRequest, security: operations.ComputeInstancesSimulateMaintenanceEventSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSimulateMaintenanceEventResponse>;
    /**
     * Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
     */
    computeInstancesStart(req: operations.ComputeInstancesStartRequest, security: operations.ComputeInstancesStartSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesStartResponse>;
    /**
     * Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
     */
    computeInstancesStartWithEncryptionKey(req: operations.ComputeInstancesStartWithEncryptionKeyRequest, security: operations.ComputeInstancesStartWithEncryptionKeySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesStartWithEncryptionKeyResponse>;
    /**
     * Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
     */
    computeInstancesStop(req: operations.ComputeInstancesStopRequest, security: operations.ComputeInstancesStopSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesStopResponse>;
    /**
     * This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time. Suspended instances have no compute costs (cores or RAM), and incur only storage charges for the saved VM memory and localSSD data. Any charged resources the virtual machine was using, such as persistent disks and static IP addresses, will continue to be charged while the instance is suspended. For more information, see Suspending and resuming an instance.
     */
    computeInstancesSuspend(req: operations.ComputeInstancesSuspendRequest, security: operations.ComputeInstancesSuspendSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesSuspendResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeInstancesTestIamPermissions(req: operations.ComputeInstancesTestIamPermissionsRequest, security: operations.ComputeInstancesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesTestIamPermissionsResponse>;
    /**
     * Updates an instance only if the necessary resources are available. This method can update only a specific set of instance properties. See Updating a running instance for a list of updatable instance properties.
     */
    computeInstancesUpdate(req: operations.ComputeInstancesUpdateRequest, security: operations.ComputeInstancesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesUpdateResponse>;
    /**
     * Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeInstancesUpdateAccessConfig(req: operations.ComputeInstancesUpdateAccessConfigRequest, security: operations.ComputeInstancesUpdateAccessConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesUpdateAccessConfigResponse>;
    /**
     * Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeInstancesUpdateDisplayDevice(req: operations.ComputeInstancesUpdateDisplayDeviceRequest, security: operations.ComputeInstancesUpdateDisplayDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesUpdateDisplayDeviceResponse>;
    /**
     * Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.
     */
    computeInstancesUpdateNetworkInterface(req: operations.ComputeInstancesUpdateNetworkInterfaceRequest, security: operations.ComputeInstancesUpdateNetworkInterfaceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesUpdateNetworkInterfaceResponse>;
    /**
     * Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeInstancesUpdateShieldedInstanceConfig(req: operations.ComputeInstancesUpdateShieldedInstanceConfigRequest, security: operations.ComputeInstancesUpdateShieldedInstanceConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesUpdateShieldedInstanceConfigResponse>;
    /**
     * Updates the Shielded VM config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeInstancesUpdateShieldedVmConfig(req: operations.ComputeInstancesUpdateShieldedVmConfigRequest, security: operations.ComputeInstancesUpdateShieldedVmConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstancesUpdateShieldedVmConfigResponse>;
}
