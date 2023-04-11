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
     * Creates a new Environment.
     */
    notebooksProjectsLocationsEnvironmentsCreate(req: operations.NotebooksProjectsLocationsEnvironmentsCreateRequest, security: operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsEnvironmentsCreateResponse>;
    /**
     * Lists environments in a project.
     */
    notebooksProjectsLocationsEnvironmentsList(req: operations.NotebooksProjectsLocationsEnvironmentsListRequest, security: operations.NotebooksProjectsLocationsEnvironmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsEnvironmentsListResponse>;
    /**
     * Creates a new Execution in a given project and location.
     */
    notebooksProjectsLocationsExecutionsCreate(req: operations.NotebooksProjectsLocationsExecutionsCreateRequest, security: operations.NotebooksProjectsLocationsExecutionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsExecutionsCreateResponse>;
    /**
     * Lists executions in a given project and location
     */
    notebooksProjectsLocationsExecutionsList(req: operations.NotebooksProjectsLocationsExecutionsListRequest, security: operations.NotebooksProjectsLocationsExecutionsListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsExecutionsListResponse>;
    /**
     * Creates a new Instance in a given project and location.
     */
    notebooksProjectsLocationsInstancesCreate(req: operations.NotebooksProjectsLocationsInstancesCreateRequest, security: operations.NotebooksProjectsLocationsInstancesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesCreateResponse>;
    /**
     * Check if a notebook instance is healthy.
     */
    notebooksProjectsLocationsInstancesGetInstanceHealth(req: operations.NotebooksProjectsLocationsInstancesGetInstanceHealthRequest, security: operations.NotebooksProjectsLocationsInstancesGetInstanceHealthSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesGetInstanceHealthResponse>;
    /**
     * Check if a notebook instance is upgradable.
     */
    notebooksProjectsLocationsInstancesIsUpgradeable(req: operations.NotebooksProjectsLocationsInstancesIsUpgradeableRequest, security: operations.NotebooksProjectsLocationsInstancesIsUpgradeableSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesIsUpgradeableResponse>;
    /**
     * Lists instances in a given project and location.
     */
    notebooksProjectsLocationsInstancesList(req: operations.NotebooksProjectsLocationsInstancesListRequest, security: operations.NotebooksProjectsLocationsInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesListResponse>;
    /**
     * Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
     */
    notebooksProjectsLocationsInstancesRegister(req: operations.NotebooksProjectsLocationsInstancesRegisterRequest, security: operations.NotebooksProjectsLocationsInstancesRegisterSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesRegisterResponse>;
    /**
     * Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
     */
    notebooksProjectsLocationsInstancesReport(req: operations.NotebooksProjectsLocationsInstancesReportRequest, security: operations.NotebooksProjectsLocationsInstancesReportSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesReportResponse>;
    /**
     * Rollbacks a notebook instance to the previous version.
     */
    notebooksProjectsLocationsInstancesRollback(req: operations.NotebooksProjectsLocationsInstancesRollbackRequest, security: operations.NotebooksProjectsLocationsInstancesRollbackSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesRollbackResponse>;
    /**
     * Updates the guest accelerators of a single Instance.
     */
    notebooksProjectsLocationsInstancesSetAccelerator(req: operations.NotebooksProjectsLocationsInstancesSetAcceleratorRequest, security: operations.NotebooksProjectsLocationsInstancesSetAcceleratorSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesSetAcceleratorResponse>;
    /**
     * Replaces all the labels of an Instance.
     */
    notebooksProjectsLocationsInstancesSetLabels(req: operations.NotebooksProjectsLocationsInstancesSetLabelsRequest, security: operations.NotebooksProjectsLocationsInstancesSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesSetLabelsResponse>;
    /**
     * Updates the machine type of a single Instance.
     */
    notebooksProjectsLocationsInstancesSetMachineType(req: operations.NotebooksProjectsLocationsInstancesSetMachineTypeRequest, security: operations.NotebooksProjectsLocationsInstancesSetMachineTypeSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesSetMachineTypeResponse>;
    /**
     * Update Notebook Instance configurations.
     */
    notebooksProjectsLocationsInstancesUpdateConfig(req: operations.NotebooksProjectsLocationsInstancesUpdateConfigRequest, security: operations.NotebooksProjectsLocationsInstancesUpdateConfigSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesUpdateConfigResponse>;
    /**
     * Add/update metadata items for an instance.
     */
    notebooksProjectsLocationsInstancesUpdateMetadataItems(req: operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest, security: operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse>;
    /**
     * Updates the Shielded instance configuration of a single Instance.
     */
    notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig(req: operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest, security: operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigResponse>;
    /**
     * Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
     */
    notebooksProjectsLocationsInstancesUpgradeInternal(req: operations.NotebooksProjectsLocationsInstancesUpgradeInternalRequest, security: operations.NotebooksProjectsLocationsInstancesUpgradeInternalSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsInstancesUpgradeInternalResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    notebooksProjectsLocationsList(req: operations.NotebooksProjectsLocationsListRequest, security: operations.NotebooksProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    notebooksProjectsLocationsOperationsCancel(req: operations.NotebooksProjectsLocationsOperationsCancelRequest, security: operations.NotebooksProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    notebooksProjectsLocationsOperationsList(req: operations.NotebooksProjectsLocationsOperationsListRequest, security: operations.NotebooksProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new Runtime in a given project and location.
     */
    notebooksProjectsLocationsRuntimesCreate(req: operations.NotebooksProjectsLocationsRuntimesCreateRequest, security: operations.NotebooksProjectsLocationsRuntimesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesCreateResponse>;
    /**
     * Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
     */
    notebooksProjectsLocationsRuntimesDiagnose(req: operations.NotebooksProjectsLocationsRuntimesDiagnoseRequest, security: operations.NotebooksProjectsLocationsRuntimesDiagnoseSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesDiagnoseResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    notebooksProjectsLocationsRuntimesGetIamPolicy(req: operations.NotebooksProjectsLocationsRuntimesGetIamPolicyRequest, security: operations.NotebooksProjectsLocationsRuntimesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesGetIamPolicyResponse>;
    /**
     * Lists Runtimes in a given project and location.
     */
    notebooksProjectsLocationsRuntimesList(req: operations.NotebooksProjectsLocationsRuntimesListRequest, security: operations.NotebooksProjectsLocationsRuntimesListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesListResponse>;
    /**
     * Update Notebook Runtime configuration.
     */
    notebooksProjectsLocationsRuntimesPatch(req: operations.NotebooksProjectsLocationsRuntimesPatchRequest, security: operations.NotebooksProjectsLocationsRuntimesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesPatchResponse>;
    /**
     * Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
     */
    notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal(req: operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest, security: operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse>;
    /**
     * Report and process a runtime event.
     */
    notebooksProjectsLocationsRuntimesReportEvent(req: operations.NotebooksProjectsLocationsRuntimesReportEventRequest, security: operations.NotebooksProjectsLocationsRuntimesReportEventSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesReportEventResponse>;
    /**
     * Resets a Managed Notebook Runtime.
     */
    notebooksProjectsLocationsRuntimesReset(req: operations.NotebooksProjectsLocationsRuntimesResetRequest, security: operations.NotebooksProjectsLocationsRuntimesResetSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesResetResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    notebooksProjectsLocationsRuntimesSetIamPolicy(req: operations.NotebooksProjectsLocationsRuntimesSetIamPolicyRequest, security: operations.NotebooksProjectsLocationsRuntimesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesSetIamPolicyResponse>;
    /**
     * Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
     */
    notebooksProjectsLocationsRuntimesStart(req: operations.NotebooksProjectsLocationsRuntimesStartRequest, security: operations.NotebooksProjectsLocationsRuntimesStartSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesStartResponse>;
    /**
     * Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
     */
    notebooksProjectsLocationsRuntimesStop(req: operations.NotebooksProjectsLocationsRuntimesStopRequest, security: operations.NotebooksProjectsLocationsRuntimesStopSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesStopResponse>;
    /**
     * Switch a Managed Notebook Runtime.
     */
    notebooksProjectsLocationsRuntimesSwitch(req: operations.NotebooksProjectsLocationsRuntimesSwitchRequest, security: operations.NotebooksProjectsLocationsRuntimesSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesSwitchResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    notebooksProjectsLocationsRuntimesTestIamPermissions(req: operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest, security: operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse>;
    /**
     * Upgrades a Managed Notebook Runtime to the latest version.
     */
    notebooksProjectsLocationsRuntimesUpgrade(req: operations.NotebooksProjectsLocationsRuntimesUpgradeRequest, security: operations.NotebooksProjectsLocationsRuntimesUpgradeSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsRuntimesUpgradeResponse>;
    /**
     * Creates a new Scheduled Notebook in a given project and location.
     */
    notebooksProjectsLocationsSchedulesCreate(req: operations.NotebooksProjectsLocationsSchedulesCreateRequest, security: operations.NotebooksProjectsLocationsSchedulesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesCreateResponse>;
    /**
     * Deletes schedule and all underlying jobs
     */
    notebooksProjectsLocationsSchedulesDelete(req: operations.NotebooksProjectsLocationsSchedulesDeleteRequest, security: operations.NotebooksProjectsLocationsSchedulesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesDeleteResponse>;
    /**
     * Gets details of schedule
     */
    notebooksProjectsLocationsSchedulesGet(req: operations.NotebooksProjectsLocationsSchedulesGetRequest, security: operations.NotebooksProjectsLocationsSchedulesGetSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesGetResponse>;
    /**
     * Lists schedules in a given project and location.
     */
    notebooksProjectsLocationsSchedulesList(req: operations.NotebooksProjectsLocationsSchedulesListRequest, security: operations.NotebooksProjectsLocationsSchedulesListSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesListResponse>;
    /**
     * Triggers execution of an existing schedule.
     */
    notebooksProjectsLocationsSchedulesTrigger(req: operations.NotebooksProjectsLocationsSchedulesTriggerRequest, security: operations.NotebooksProjectsLocationsSchedulesTriggerSecurity, config?: AxiosRequestConfig): Promise<operations.NotebooksProjectsLocationsSchedulesTriggerResponse>;
}
