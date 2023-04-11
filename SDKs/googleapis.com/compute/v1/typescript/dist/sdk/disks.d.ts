import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Disks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
     */
    computeDisksAddResourcePolicies(req: operations.ComputeDisksAddResourcePoliciesRequest, security: operations.ComputeDisksAddResourcePoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksAddResourcePoliciesResponse>;
    /**
     * Retrieves an aggregated list of persistent disks.
     */
    computeDisksAggregatedList(req: operations.ComputeDisksAggregatedListRequest, security: operations.ComputeDisksAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksAggregatedListResponse>;
    /**
     * Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
     */
    computeDisksCreateSnapshot(req: operations.ComputeDisksCreateSnapshotRequest, security: operations.ComputeDisksCreateSnapshotSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksCreateSnapshotResponse>;
    /**
     * Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
     */
    computeDisksDelete(req: operations.ComputeDisksDeleteRequest, security: operations.ComputeDisksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksDeleteResponse>;
    /**
     * Returns the specified persistent disk.
     */
    computeDisksGet(req: operations.ComputeDisksGetRequest, security: operations.ComputeDisksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeDisksGetIamPolicy(req: operations.ComputeDisksGetIamPolicyRequest, security: operations.ComputeDisksGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksGetIamPolicyResponse>;
    /**
     * Creates a persistent disk in the specified project using the data in the request. You can create a disk from a source (sourceImage, sourceSnapshot, or sourceDisk) or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
     */
    computeDisksInsert(req: operations.ComputeDisksInsertRequest, security: operations.ComputeDisksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksInsertResponse>;
    /**
     * Retrieves a list of persistent disks contained within the specified zone.
     */
    computeDisksList(req: operations.ComputeDisksListRequest, security: operations.ComputeDisksListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksListResponse>;
    /**
     * Removes resource policies from a disk.
     */
    computeDisksRemoveResourcePolicies(req: operations.ComputeDisksRemoveResourcePoliciesRequest, security: operations.ComputeDisksRemoveResourcePoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksRemoveResourcePoliciesResponse>;
    /**
     * Resizes the specified persistent disk. You can only increase the size of the disk.
     */
    computeDisksResize(req: operations.ComputeDisksResizeRequest, security: operations.ComputeDisksResizeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksResizeResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeDisksSetIamPolicy(req: operations.ComputeDisksSetIamPolicyRequest, security: operations.ComputeDisksSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksSetIamPolicyResponse>;
    /**
     * Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.
     */
    computeDisksSetLabels(req: operations.ComputeDisksSetLabelsRequest, security: operations.ComputeDisksSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeDisksTestIamPermissions(req: operations.ComputeDisksTestIamPermissionsRequest, security: operations.ComputeDisksTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksTestIamPermissionsResponse>;
    /**
     * Updates the specified disk with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.
     */
    computeDisksUpdate(req: operations.ComputeDisksUpdateRequest, security: operations.ComputeDisksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDisksUpdateResponse>;
}
