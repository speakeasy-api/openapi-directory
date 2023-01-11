import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class JiraServerIntegration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getIntegrationsJiraServerProjects - List Jira Projects
    **/
    getIntegrationsJiraServerProjects(config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraServerProjectsResponse>;
    /**
     * getIntegrationsJiraServerProjectsProjectIdIssueTypes - Retrieve project issue types
    **/
    getIntegrationsJiraServerProjectsProjectIdIssueTypes(req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse>;
    /**
     * getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities - Retrieve issue priorities
    **/
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities(req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse>;
    /**
     * getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus - Retrieve issue statuses
    **/
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus(req: operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse>;
    /**
     * getTargetsTargetIdFindingsIdIntegrationsJiraServer - Retrieve Jira Server finding configuration
    **/
    getTargetsTargetIdFindingsIdIntegrationsJiraServer(req: operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse>;
    /**
     * getTargetsTargetIdIntegrationsJiraServer - Retrieve Jira Server Target configuration
    **/
    getTargetsTargetIdIntegrationsJiraServer(req: operations.GetTargetsTargetIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdIntegrationsJiraServerResponse>;
    /**
     * patchTargetsTargetIdFindingsIdIntegrationsJiraServer - Update Jira Server finding configuration
    **/
    patchTargetsTargetIdFindingsIdIntegrationsJiraServer(req: operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse>;
    /**
     * patchTargetsTargetIdIntegrationsJiraServer - Update Jira Server target configuration
    **/
    patchTargetsTargetIdIntegrationsJiraServer(req: operations.PatchTargetsTargetIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdIntegrationsJiraServerResponse>;
    /**
     * putTargetsTargetIdFindingsIdIntegrationsJiraServer - Update Jira Server finding configuration
    **/
    putTargetsTargetIdFindingsIdIntegrationsJiraServer(req: operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse>;
    /**
     * putTargetsTargetIdIntegrationsJiraServer - Update Jira Server target configuration
    **/
    putTargetsTargetIdIntegrationsJiraServer(req: operations.PutTargetsTargetIdIntegrationsJiraServerRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdIntegrationsJiraServerResponse>;
}
