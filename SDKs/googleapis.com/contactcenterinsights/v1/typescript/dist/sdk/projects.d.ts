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
     * Creates an analysis. The long running operation is done when the analysis has completed.
     */
    contactcenterinsightsProjectsLocationsConversationsAnalysesCreate(req: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest, security: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse>;
    /**
     * Lists analyses.
     */
    contactcenterinsightsProjectsLocationsConversationsAnalysesList(req: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest, security: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse>;
    /**
     * Analyzes multiple conversations in a single request.
     */
    contactcenterinsightsProjectsLocationsConversationsBulkAnalyze(req: operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest, security: operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse>;
    /**
     * Gets conversation statistics.
     */
    contactcenterinsightsProjectsLocationsConversationsCalculateStats(req: operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest, security: operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse>;
    /**
     * Creates a conversation.
     */
    contactcenterinsightsProjectsLocationsConversationsCreate(req: operations.ContactcenterinsightsProjectsLocationsConversationsCreateRequest, security: operations.ContactcenterinsightsProjectsLocationsConversationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse>;
    /**
     * Imports conversations and processes them according to the user's configuration.
     */
    contactcenterinsightsProjectsLocationsConversationsIngest(req: operations.ContactcenterinsightsProjectsLocationsConversationsIngestRequest, security: operations.ContactcenterinsightsProjectsLocationsConversationsIngestSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsIngestResponse>;
    /**
     * Lists conversations.
     */
    contactcenterinsightsProjectsLocationsConversationsList(req: operations.ContactcenterinsightsProjectsLocationsConversationsListRequest, security: operations.ContactcenterinsightsProjectsLocationsConversationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsConversationsListResponse>;
    /**
     * Export insights data to a destination defined in the request body.
     */
    contactcenterinsightsProjectsLocationsInsightsdataExport(req: operations.ContactcenterinsightsProjectsLocationsInsightsdataExportRequest, security: operations.ContactcenterinsightsProjectsLocationsInsightsdataExportSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse>;
    /**
     * Gets an issue model's statistics.
     */
    contactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStats(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest, security: operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse>;
    /**
     * Creates an issue model.
     */
    contactcenterinsightsProjectsLocationsIssueModelsCreate(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest, security: operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse>;
    /**
     * Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
     */
    contactcenterinsightsProjectsLocationsIssueModelsDeploy(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest, security: operations.ContactcenterinsightsProjectsLocationsIssueModelsDeploySecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse>;
    /**
     * Lists issues.
     */
    contactcenterinsightsProjectsLocationsIssueModelsIssuesList(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest, security: operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse>;
    /**
     * Lists issue models.
     */
    contactcenterinsightsProjectsLocationsIssueModelsList(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsListRequest, security: operations.ContactcenterinsightsProjectsLocationsIssueModelsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse>;
    /**
     * Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
     */
    contactcenterinsightsProjectsLocationsIssueModelsUndeploy(req: operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest, security: operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeploySecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    contactcenterinsightsProjectsLocationsOperationsCancel(req: operations.ContactcenterinsightsProjectsLocationsOperationsCancelRequest, security: operations.ContactcenterinsightsProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    contactcenterinsightsProjectsLocationsOperationsList(req: operations.ContactcenterinsightsProjectsLocationsOperationsListRequest, security: operations.ContactcenterinsightsProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsOperationsListResponse>;
    /**
     * Creates a phrase matcher.
     */
    contactcenterinsightsProjectsLocationsPhraseMatchersCreate(req: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest, security: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse>;
    /**
     * Lists phrase matchers.
     */
    contactcenterinsightsProjectsLocationsPhraseMatchersList(req: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest, security: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse>;
    /**
     * Creates a view.
     */
    contactcenterinsightsProjectsLocationsViewsCreate(req: operations.ContactcenterinsightsProjectsLocationsViewsCreateRequest, security: operations.ContactcenterinsightsProjectsLocationsViewsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse>;
    /**
     * Deletes a view.
     */
    contactcenterinsightsProjectsLocationsViewsDelete(req: operations.ContactcenterinsightsProjectsLocationsViewsDeleteRequest, security: operations.ContactcenterinsightsProjectsLocationsViewsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse>;
    /**
     * Gets a view.
     */
    contactcenterinsightsProjectsLocationsViewsGet(req: operations.ContactcenterinsightsProjectsLocationsViewsGetRequest, security: operations.ContactcenterinsightsProjectsLocationsViewsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsGetResponse>;
    /**
     * Lists views.
     */
    contactcenterinsightsProjectsLocationsViewsList(req: operations.ContactcenterinsightsProjectsLocationsViewsListRequest, security: operations.ContactcenterinsightsProjectsLocationsViewsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsListResponse>;
    /**
     * Updates a view.
     */
    contactcenterinsightsProjectsLocationsViewsPatch(req: operations.ContactcenterinsightsProjectsLocationsViewsPatchRequest, security: operations.ContactcenterinsightsProjectsLocationsViewsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse>;
}
