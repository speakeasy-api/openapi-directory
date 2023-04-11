import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To start integrating Probely with Jira you will first need to add the
 *
 * @remarks
 * Probely app to your Jira instance.
 * Go to the marketplace, search for Probely and install the application.
 * When prompted click the "Get Started" button and follow the steps described
 * to connect both accounts.
 * A short explanation of the sync options can be found
 * [here](https://help.probely.com/integrations/jira-syncronization-settings).
 *
 */
export declare class JiraCloudIntegration {
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
    getIntegrationsJiraCloudProjects(config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraCloudProjectsResponse>;
    /**
     * Retrieve project issue types
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypes(req: operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse>;
    /**
     * Retrieve issue priorities
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities(req: operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse>;
    /**
     * Retrieve issue statuses
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus(req: operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusResponse>;
    /**
     * Retrieve Jira Cloud finding configuration
     */
    getTargetsTargetIdFindingsIdIntegrationsJiraCloud(req: operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse>;
    /**
     * Retrieve Jira Cloud Target configuration
     */
    getTargetsTargetIdIntegrationsJiraCloud(req: operations.GetTargetsTargetIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdIntegrationsJiraCloudResponse>;
    /**
     * Update Jira Cloud finding configuration
     */
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloud(req: operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse>;
    /**
     * Update Jira Cloud target configuration
     */
    patchTargetsTargetIdIntegrationsJiraCloud(req: operations.PatchTargetsTargetIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdIntegrationsJiraCloudResponse>;
    /**
     * Update Jira Cloud finding configuration
     */
    putTargetsTargetIdFindingsIdIntegrationsJiraCloud(req: operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse>;
    /**
     * Update Jira Cloud target configuration
     */
    putTargetsTargetIdIntegrationsJiraCloud(req: operations.PutTargetsTargetIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdIntegrationsJiraCloudResponse>;
}
