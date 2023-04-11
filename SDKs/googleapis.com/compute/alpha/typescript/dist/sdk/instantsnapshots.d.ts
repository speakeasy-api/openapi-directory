import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InstantSnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of instantSnapshots.
     */
    computeInstantSnapshotsAggregatedList(req: operations.ComputeInstantSnapshotsAggregatedListRequest, security: operations.ComputeInstantSnapshotsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsAggregatedListResponse>;
    /**
     * Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
     */
    computeInstantSnapshotsDelete(req: operations.ComputeInstantSnapshotsDeleteRequest, security: operations.ComputeInstantSnapshotsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsDeleteResponse>;
    /**
     * Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
     */
    computeInstantSnapshotsExport(req: operations.ComputeInstantSnapshotsExportRequest, security: operations.ComputeInstantSnapshotsExportSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsExportResponse>;
    /**
     * Returns the specified InstantSnapshot resource in the specified zone.
     */
    computeInstantSnapshotsGet(req: operations.ComputeInstantSnapshotsGetRequest, security: operations.ComputeInstantSnapshotsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeInstantSnapshotsGetIamPolicy(req: operations.ComputeInstantSnapshotsGetIamPolicyRequest, security: operations.ComputeInstantSnapshotsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsGetIamPolicyResponse>;
    /**
     * Creates an instant snapshot in the specified zone.
     */
    computeInstantSnapshotsInsert(req: operations.ComputeInstantSnapshotsInsertRequest, security: operations.ComputeInstantSnapshotsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsInsertResponse>;
    /**
     * Retrieves the list of InstantSnapshot resources contained within the specified zone.
     */
    computeInstantSnapshotsList(req: operations.ComputeInstantSnapshotsListRequest, security: operations.ComputeInstantSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeInstantSnapshotsSetIamPolicy(req: operations.ComputeInstantSnapshotsSetIamPolicyRequest, security: operations.ComputeInstantSnapshotsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsSetIamPolicyResponse>;
    /**
     * Sets the labels on a instantSnapshot in the given zone. To learn more about labels, read the Labeling Resources documentation.
     */
    computeInstantSnapshotsSetLabels(req: operations.ComputeInstantSnapshotsSetLabelsRequest, security: operations.ComputeInstantSnapshotsSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeInstantSnapshotsTestIamPermissions(req: operations.ComputeInstantSnapshotsTestIamPermissionsRequest, security: operations.ComputeInstantSnapshotsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstantSnapshotsTestIamPermissionsResponse>;
}
