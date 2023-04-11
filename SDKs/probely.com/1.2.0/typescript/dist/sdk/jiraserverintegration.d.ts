import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Find instructions on how to configure this integration for your Jira
 *
 * @remarks
 * deployment [here](https://help.probely.com/integrations/how-to-integrate-probely-with-jira-server).
 * A short explanation of the sync options can be found
 * [here](https://help.probely.com/integrations/jira-syncronization-settings).
 *
 */
export declare class JiraServerIntegration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Jira Projects
     */
    getIntegrationsJiraServerProjects(config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraServerProjectsResponse>;
    /**
     * Retrieve project issue types
     */
    getIntegrationsJiraServerProjectsProjectIdIssueTypes(req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse>;
    /**
     * Retrieve issue priorities
     */
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities(req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse>;
    /**
     * Retrieve issue statuses
     */
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus(req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse>;
    /**
     * Retrieve Jira Server finding configuration
     */
    getTargetsTargetIdFindingsIdIntegrationsJiraServer(req: operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse>;
    /**
     * Retrieve Jira Server Target configuration
     */
    getTargetsTargetIdIntegrationsJiraServer(req: operations.GetTargetsTargetIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdIntegrationsJiraServerResponse>;
    /**
     * Update Jira Server finding configuration
     */
    patchTargetsTargetIdFindingsIdIntegrationsJiraServer(req: operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse>;
    /**
     * Update Jira Server target configuration
     */
    patchTargetsTargetIdIntegrationsJiraServer(req: operations.PatchTargetsTargetIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdIntegrationsJiraServerResponse>;
    /**
     * Update Jira Server finding configuration
     */
    putTargetsTargetIdFindingsIdIntegrationsJiraServer(req: operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse>;
    /**
     * Update Jira Server target configuration
     */
    putTargetsTargetIdIntegrationsJiraServer(req: operations.PutTargetsTargetIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdIntegrationsJiraServerResponse>;
}
