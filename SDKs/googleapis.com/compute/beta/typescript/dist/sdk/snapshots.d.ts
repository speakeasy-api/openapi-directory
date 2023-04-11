import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Snapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot. For more information, see Deleting snapshots.
     */
    computeSnapshotsDelete(req: operations.ComputeSnapshotsDeleteRequest, security: operations.ComputeSnapshotsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSnapshotsDeleteResponse>;
    /**
     * Returns the specified Snapshot resource.
     */
    computeSnapshotsGet(req: operations.ComputeSnapshotsGetRequest, security: operations.ComputeSnapshotsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSnapshotsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeSnapshotsGetIamPolicy(req: operations.ComputeSnapshotsGetIamPolicyRequest, security: operations.ComputeSnapshotsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSnapshotsGetIamPolicyResponse>;
    /**
     * Creates a snapshot in the specified project using the data included in the request. For regular snapshot creation, consider using this method instead of disks.createSnapshot, as this method supports more features, such as creating snapshots in a project different from the source disk project.
     */
    computeSnapshotsInsert(req: operations.ComputeSnapshotsInsertRequest, security: operations.ComputeSnapshotsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSnapshotsInsertResponse>;
    /**
     * Retrieves the list of Snapshot resources contained within the specified project.
     */
    computeSnapshotsList(req: operations.ComputeSnapshotsListRequest, security: operations.ComputeSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSnapshotsListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeSnapshotsSetIamPolicy(req: operations.ComputeSnapshotsSetIamPolicyRequest, security: operations.ComputeSnapshotsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSnapshotsSetIamPolicyResponse>;
    /**
     * Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.
     */
    computeSnapshotsSetLabels(req: operations.ComputeSnapshotsSetLabelsRequest, security: operations.ComputeSnapshotsSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSnapshotsSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeSnapshotsTestIamPermissions(req: operations.ComputeSnapshotsTestIamPermissionsRequest, security: operations.ComputeSnapshotsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSnapshotsTestIamPermissionsResponse>;
}
