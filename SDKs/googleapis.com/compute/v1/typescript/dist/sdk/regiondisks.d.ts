import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionDisks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
     */
    computeRegionDisksAddResourcePolicies(req: operations.ComputeRegionDisksAddResourcePoliciesRequest, security: operations.ComputeRegionDisksAddResourcePoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksAddResourcePoliciesResponse>;
    /**
     * Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
     */
    computeRegionDisksCreateSnapshot(req: operations.ComputeRegionDisksCreateSnapshotRequest, security: operations.ComputeRegionDisksCreateSnapshotSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksCreateSnapshotResponse>;
    /**
     * Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
     */
    computeRegionDisksDelete(req: operations.ComputeRegionDisksDeleteRequest, security: operations.ComputeRegionDisksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksDeleteResponse>;
    /**
     * Returns a specified regional persistent disk.
     */
    computeRegionDisksGet(req: operations.ComputeRegionDisksGetRequest, security: operations.ComputeRegionDisksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeRegionDisksGetIamPolicy(req: operations.ComputeRegionDisksGetIamPolicyRequest, security: operations.ComputeRegionDisksGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksGetIamPolicyResponse>;
    /**
     * Creates a persistent regional disk in the specified project using the data included in the request.
     */
    computeRegionDisksInsert(req: operations.ComputeRegionDisksInsertRequest, security: operations.ComputeRegionDisksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksInsertResponse>;
    /**
     * Retrieves the list of persistent disks contained within the specified region.
     */
    computeRegionDisksList(req: operations.ComputeRegionDisksListRequest, security: operations.ComputeRegionDisksListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksListResponse>;
    /**
     * Removes resource policies from a regional disk.
     */
    computeRegionDisksRemoveResourcePolicies(req: operations.ComputeRegionDisksRemoveResourcePoliciesRequest, security: operations.ComputeRegionDisksRemoveResourcePoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksRemoveResourcePoliciesResponse>;
    /**
     * Resizes the specified regional persistent disk.
     */
    computeRegionDisksResize(req: operations.ComputeRegionDisksResizeRequest, security: operations.ComputeRegionDisksResizeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksResizeResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeRegionDisksSetIamPolicy(req: operations.ComputeRegionDisksSetIamPolicyRequest, security: operations.ComputeRegionDisksSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksSetIamPolicyResponse>;
    /**
     * Sets the labels on the target regional disk.
     */
    computeRegionDisksSetLabels(req: operations.ComputeRegionDisksSetLabelsRequest, security: operations.ComputeRegionDisksSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionDisksTestIamPermissions(req: operations.ComputeRegionDisksTestIamPermissionsRequest, security: operations.ComputeRegionDisksTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksTestIamPermissionsResponse>;
    /**
     * Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.
     */
    computeRegionDisksUpdate(req: operations.ComputeRegionDisksUpdateRequest, security: operations.ComputeRegionDisksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDisksUpdateResponse>;
}
