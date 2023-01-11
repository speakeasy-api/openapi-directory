import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class JiraCloudIntegration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getIntegrationsJiraCloudProjects - List Jira Projects
    **/
    getIntegrationsJiraCloudProjects(config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraCloudProjectsResponse>;
    /**
     * getIntegrationsJiraCloudProjectsProjectIdIssueTypes - Retrieve project issue types
    **/
    getIntegrationsJiraCloudProjectsProjectIdIssueTypes(req: operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse>;
    /**
     * getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities - Retrieve issue priorities
    **/
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities(req: operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse>;
    /**
     * getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus - Retrieve issue statuses
    **/
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus(req: operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusResponse>;
    /**
     * getTargetsTargetIdFindingsIdIntegrationsJiraCloud - Retrieve Jira Cloud finding configuration
    **/
    getTargetsTargetIdFindingsIdIntegrationsJiraCloud(req: operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse>;
    /**
     * getTargetsTargetIdIntegrationsJiraCloud - Retrieve Jira Cloud Target configuration
    **/
    getTargetsTargetIdIntegrationsJiraCloud(req: operations.GetTargetsTargetIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdIntegrationsJiraCloudResponse>;
    /**
     * patchTargetsTargetIdFindingsIdIntegrationsJiraCloud - Update Jira Cloud finding configuration
    **/
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloud(req: operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse>;
    /**
     * patchTargetsTargetIdIntegrationsJiraCloud - Update Jira Cloud target configuration
    **/
    patchTargetsTargetIdIntegrationsJiraCloud(req: operations.PatchTargetsTargetIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdIntegrationsJiraCloudResponse>;
    /**
     * putTargetsTargetIdFindingsIdIntegrationsJiraCloud - Update Jira Cloud finding configuration
    **/
    putTargetsTargetIdFindingsIdIntegrationsJiraCloud(req: operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse>;
    /**
     * putTargetsTargetIdIntegrationsJiraCloud - Update Jira Cloud target configuration
    **/
    putTargetsTargetIdIntegrationsJiraCloud(req: operations.PutTargetsTargetIdIntegrationsJiraCloudRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdIntegrationsJiraCloudResponse>;
}
