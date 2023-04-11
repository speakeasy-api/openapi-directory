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
     * Creates a new DeliveryPipeline in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesCreate(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse>;
    /**
     * Lists DeliveryPipelines in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesList(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesListRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesListResponse>;
    /**
     * Abandons a Release in the Delivery Pipeline.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonResponse>;
    /**
     * Creates a new Release in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse>;
    /**
     * Lists Releases in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesList(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse>;
    /**
     * Advances a Rollout in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceResponse>;
    /**
     * Approves a Rollout.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveResponse>;
    /**
     * Creates a new Rollout in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse>;
    /**
     * Ignores the specified Job in a Rollout.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobResponse>;
    /**
     * Lists JobRuns in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse>;
    /**
     * Terminates a Job Run in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateResponse>;
    /**
     * Lists Rollouts in a given project and location.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse>;
    /**
     * Retries the specified Job in a Rollout.
     */
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest, security: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    clouddeployProjectsLocationsList(req: operations.ClouddeployProjectsLocationsListRequest, security: operations.ClouddeployProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    clouddeployProjectsLocationsOperationsCancel(req: operations.ClouddeployProjectsLocationsOperationsCancelRequest, security: operations.ClouddeployProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    clouddeployProjectsLocationsOperationsList(req: operations.ClouddeployProjectsLocationsOperationsListRequest, security: operations.ClouddeployProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new Target in a given project and location.
     */
    clouddeployProjectsLocationsTargetsCreate(req: operations.ClouddeployProjectsLocationsTargetsCreateRequest, security: operations.ClouddeployProjectsLocationsTargetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsCreateResponse>;
    /**
     * Deletes a single Target.
     */
    clouddeployProjectsLocationsTargetsDelete(req: operations.ClouddeployProjectsLocationsTargetsDeleteRequest, security: operations.ClouddeployProjectsLocationsTargetsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsDeleteResponse>;
    /**
     * Gets details of a single Target.
     */
    clouddeployProjectsLocationsTargetsGet(req: operations.ClouddeployProjectsLocationsTargetsGetRequest, security: operations.ClouddeployProjectsLocationsTargetsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    clouddeployProjectsLocationsTargetsGetIamPolicy(req: operations.ClouddeployProjectsLocationsTargetsGetIamPolicyRequest, security: operations.ClouddeployProjectsLocationsTargetsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsGetIamPolicyResponse>;
    /**
     * Lists Targets in a given project and location.
     */
    clouddeployProjectsLocationsTargetsList(req: operations.ClouddeployProjectsLocationsTargetsListRequest, security: operations.ClouddeployProjectsLocationsTargetsListSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsListResponse>;
    /**
     * Updates the parameters of a single Target.
     */
    clouddeployProjectsLocationsTargetsPatch(req: operations.ClouddeployProjectsLocationsTargetsPatchRequest, security: operations.ClouddeployProjectsLocationsTargetsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    clouddeployProjectsLocationsTargetsSetIamPolicy(req: operations.ClouddeployProjectsLocationsTargetsSetIamPolicyRequest, security: operations.ClouddeployProjectsLocationsTargetsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    clouddeployProjectsLocationsTargetsTestIamPermissions(req: operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest, security: operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse>;
}
