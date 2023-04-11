import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionInstantSnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
     */
    computeRegionInstantSnapshotsDelete(req: operations.ComputeRegionInstantSnapshotsDeleteRequest, security: operations.ComputeRegionInstantSnapshotsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsDeleteResponse>;
    /**
     * Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
     */
    computeRegionInstantSnapshotsExport(req: operations.ComputeRegionInstantSnapshotsExportRequest, security: operations.ComputeRegionInstantSnapshotsExportSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsExportResponse>;
    /**
     * Returns the specified InstantSnapshot resource in the specified region.
     */
    computeRegionInstantSnapshotsGet(req: operations.ComputeRegionInstantSnapshotsGetRequest, security: operations.ComputeRegionInstantSnapshotsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeRegionInstantSnapshotsGetIamPolicy(req: operations.ComputeRegionInstantSnapshotsGetIamPolicyRequest, security: operations.ComputeRegionInstantSnapshotsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsGetIamPolicyResponse>;
    /**
     * Creates an instant snapshot in the specified region.
     */
    computeRegionInstantSnapshotsInsert(req: operations.ComputeRegionInstantSnapshotsInsertRequest, security: operations.ComputeRegionInstantSnapshotsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsInsertResponse>;
    /**
     * Retrieves the list of InstantSnapshot resources contained within the specified region.
     */
    computeRegionInstantSnapshotsList(req: operations.ComputeRegionInstantSnapshotsListRequest, security: operations.ComputeRegionInstantSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeRegionInstantSnapshotsSetIamPolicy(req: operations.ComputeRegionInstantSnapshotsSetIamPolicyRequest, security: operations.ComputeRegionInstantSnapshotsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsSetIamPolicyResponse>;
    /**
     * Sets the labels on a instantSnapshot in the given region. To learn more about labels, read the Labeling Resources documentation.
     */
    computeRegionInstantSnapshotsSetLabels(req: operations.ComputeRegionInstantSnapshotsSetLabelsRequest, security: operations.ComputeRegionInstantSnapshotsSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionInstantSnapshotsTestIamPermissions(req: operations.ComputeRegionInstantSnapshotsTestIamPermissionsRequest, security: operations.ComputeRegionInstantSnapshotsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstantSnapshotsTestIamPermissionsResponse>;
}
