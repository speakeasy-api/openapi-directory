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
     * Returns the list of Changelogs.
     */
    dialogflowProjectsLocationsAgentsChangelogsList(req: operations.DialogflowProjectsLocationsAgentsChangelogsListRequest, security: operations.DialogflowProjectsLocationsAgentsChangelogsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsChangelogsListResponse>;
    /**
     * Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     */
    dialogflowProjectsLocationsAgentsCreate(req: operations.DialogflowProjectsLocationsAgentsCreateRequest, security: operations.DialogflowProjectsLocationsAgentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsCreateResponse>;
    /**
     * Fetches a list of continuous test results for a given environment.
     */
    dialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListResponse>;
    /**
     * Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
     */
    dialogflowProjectsLocationsAgentsEnvironmentsCreate(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse>;
    /**
     * Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
     */
    dialogflowProjectsLocationsAgentsEnvironmentsDeployFlow(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse>;
    /**
     * Returns the list of all deployments in the specified Environment.
     */
    dialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListResponse>;
    /**
     * Creates an Experiment in the specified Environment.
     */
    dialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse>;
    /**
     * Returns the list of all experiments in the specified Environment.
     */
    dialogflowProjectsLocationsAgentsEnvironmentsExperimentsList(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListResponse>;
    /**
     * Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
     */
    dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse>;
    /**
     * Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
     */
    dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopResponse>;
    /**
     * Returns the list of all environments in the specified Agent.
     */
    dialogflowProjectsLocationsAgentsEnvironmentsList(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsListRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsListResponse>;
    /**
     * Looks up the history of the specified Environment.
     */
    dialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse>;
    /**
     * Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
     */
    dialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestRequest, security: operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestResponse>;
    /**
     * Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     */
    dialogflowProjectsLocationsAgentsFlowsCreate(req: operations.DialogflowProjectsLocationsAgentsFlowsCreateRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsCreateResponse>;
    /**
     * Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
     */
    dialogflowProjectsLocationsAgentsFlowsExport(req: operations.DialogflowProjectsLocationsAgentsFlowsExportRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsExportSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsExportResponse>;
    /**
     * Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     */
    dialogflowProjectsLocationsAgentsFlowsImport(req: operations.DialogflowProjectsLocationsAgentsFlowsImportRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsImportSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsImportResponse>;
    /**
     * Returns the list of all flows in the specified agent.
     */
    dialogflowProjectsLocationsAgentsFlowsList(req: operations.DialogflowProjectsLocationsAgentsFlowsListRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsListResponse>;
    /**
     * Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     */
    dialogflowProjectsLocationsAgentsFlowsPagesCreate(req: operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateResponse>;
    /**
     * Returns the list of all pages in the specified flow.
     */
    dialogflowProjectsLocationsAgentsFlowsPagesList(req: operations.DialogflowProjectsLocationsAgentsFlowsPagesListRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsPagesListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsPagesListResponse>;
    /**
     * Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     */
    dialogflowProjectsLocationsAgentsFlowsTrain(req: operations.DialogflowProjectsLocationsAgentsFlowsTrainRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsTrainSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsTrainResponse>;
    /**
     * Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     */
    dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate(req: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse>;
    /**
     * Returns the list of all transition route groups in the specified flow.
     */
    dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList(req: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse>;
    /**
     * Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
     */
    dialogflowProjectsLocationsAgentsFlowsValidate(req: operations.DialogflowProjectsLocationsAgentsFlowsValidateRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsValidateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsValidateResponse>;
    /**
     * Compares the specified base version with target version.
     */
    dialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions(req: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse>;
    /**
     * Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
     */
    dialogflowProjectsLocationsAgentsFlowsVersionsCreate(req: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse>;
    /**
     * Returns the list of all versions in the specified Flow.
     */
    dialogflowProjectsLocationsAgentsFlowsVersionsList(req: operations.DialogflowProjectsLocationsAgentsFlowsVersionsListRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsVersionsListResponse>;
    /**
     * Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     */
    dialogflowProjectsLocationsAgentsFlowsVersionsLoad(req: operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest, security: operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse>;
    /**
     * Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     */
    dialogflowProjectsLocationsAgentsIntentsCreate(req: operations.DialogflowProjectsLocationsAgentsIntentsCreateRequest, security: operations.DialogflowProjectsLocationsAgentsIntentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsIntentsCreateResponse>;
    /**
     * Returns the list of all intents in the specified agent.
     */
    dialogflowProjectsLocationsAgentsIntentsList(req: operations.DialogflowProjectsLocationsAgentsIntentsListRequest, security: operations.DialogflowProjectsLocationsAgentsIntentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsIntentsListResponse>;
    /**
     * Returns the list of all agents in the specified location.
     */
    dialogflowProjectsLocationsAgentsList(req: operations.DialogflowProjectsLocationsAgentsListRequest, security: operations.DialogflowProjectsLocationsAgentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsListResponse>;
    /**
     * Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     */
    dialogflowProjectsLocationsAgentsRestore(req: operations.DialogflowProjectsLocationsAgentsRestoreRequest, security: operations.DialogflowProjectsLocationsAgentsRestoreSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsRestoreResponse>;
    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     */
    dialogflowProjectsLocationsAgentsSessionsDetectIntent(req: operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest, security: operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse>;
    /**
     * Creates a session entity type.
     */
    dialogflowProjectsLocationsAgentsSessionsEntityTypesCreate(req: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest, security: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse>;
    /**
     * Returns the list of all session entity types in the specified session.
     */
    dialogflowProjectsLocationsAgentsSessionsEntityTypesList(req: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest, security: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse>;
    /**
     * Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
     */
    dialogflowProjectsLocationsAgentsSessionsFulfillIntent(req: operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest, security: operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse>;
    /**
     * Returns preliminary intent match results, doesn't change the session status.
     */
    dialogflowProjectsLocationsAgentsSessionsMatchIntent(req: operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest, security: operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse>;
    /**
     * Batch deletes test cases.
     */
    dialogflowProjectsLocationsAgentsTestCasesBatchDelete(req: operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse>;
    /**
     * Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
     */
    dialogflowProjectsLocationsAgentsTestCasesBatchRun(req: operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse>;
    /**
     * Calculates the test coverage for an agent.
     */
    dialogflowProjectsLocationsAgentsTestCasesCalculateCoverage(req: operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse>;
    /**
     * Creates a test case for the given agent.
     */
    dialogflowProjectsLocationsAgentsTestCasesCreate(req: operations.DialogflowProjectsLocationsAgentsTestCasesCreateRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesCreateResponse>;
    /**
     * Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
     */
    dialogflowProjectsLocationsAgentsTestCasesExport(req: operations.DialogflowProjectsLocationsAgentsTestCasesExportRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesExportSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesExportResponse>;
    /**
     * Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
     */
    dialogflowProjectsLocationsAgentsTestCasesImport(req: operations.DialogflowProjectsLocationsAgentsTestCasesImportRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesImportSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesImportResponse>;
    /**
     * Fetches a list of test cases for a given agent.
     */
    dialogflowProjectsLocationsAgentsTestCasesList(req: operations.DialogflowProjectsLocationsAgentsTestCasesListRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesListResponse>;
    /**
     * Fetches a list of results for a given test case.
     */
    dialogflowProjectsLocationsAgentsTestCasesResultsList(req: operations.DialogflowProjectsLocationsAgentsTestCasesResultsListRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesResultsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesResultsListResponse>;
    /**
     * Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
     */
    dialogflowProjectsLocationsAgentsTestCasesRun(req: operations.DialogflowProjectsLocationsAgentsTestCasesRunRequest, security: operations.DialogflowProjectsLocationsAgentsTestCasesRunSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesRunResponse>;
    /**
     * Creates a webhook in the specified agent.
     */
    dialogflowProjectsLocationsAgentsWebhooksCreate(req: operations.DialogflowProjectsLocationsAgentsWebhooksCreateRequest, security: operations.DialogflowProjectsLocationsAgentsWebhooksCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsWebhooksCreateResponse>;
    /**
     * Returns the list of all webhooks in the specified agent.
     */
    dialogflowProjectsLocationsAgentsWebhooksList(req: operations.DialogflowProjectsLocationsAgentsWebhooksListRequest, security: operations.DialogflowProjectsLocationsAgentsWebhooksListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsWebhooksListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    dialogflowProjectsLocationsList(req: operations.DialogflowProjectsLocationsListRequest, security: operations.DialogflowProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsListResponse>;
    /**
     * Create security settings in the specified location.
     */
    dialogflowProjectsLocationsSecuritySettingsCreate(req: operations.DialogflowProjectsLocationsSecuritySettingsCreateRequest, security: operations.DialogflowProjectsLocationsSecuritySettingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSecuritySettingsCreateResponse>;
    /**
     * Deletes the specified SecuritySettings.
     */
    dialogflowProjectsLocationsSecuritySettingsDelete(req: operations.DialogflowProjectsLocationsSecuritySettingsDeleteRequest, security: operations.DialogflowProjectsLocationsSecuritySettingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSecuritySettingsDeleteResponse>;
    /**
     * Returns the list of all security settings in the specified location.
     */
    dialogflowProjectsLocationsSecuritySettingsList(req: operations.DialogflowProjectsLocationsSecuritySettingsListRequest, security: operations.DialogflowProjectsLocationsSecuritySettingsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSecuritySettingsListResponse>;
    /**
     * Updates the specified SecuritySettings.
     */
    dialogflowProjectsLocationsSecuritySettingsPatch(req: operations.DialogflowProjectsLocationsSecuritySettingsPatchRequest, security: operations.DialogflowProjectsLocationsSecuritySettingsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSecuritySettingsPatchResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    dialogflowProjectsOperationsCancel(req: operations.DialogflowProjectsOperationsCancelRequest, security: operations.DialogflowProjectsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsCancelResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    dialogflowProjectsOperationsGet(req: operations.DialogflowProjectsOperationsGetRequest, security: operations.DialogflowProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    dialogflowProjectsOperationsList(req: operations.DialogflowProjectsOperationsListRequest, security: operations.DialogflowProjectsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsListResponse>;
}
