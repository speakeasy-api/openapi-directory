import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest extends SpeakeasyBase {
    /**
     * Jira issue type id
     */
    issueTypeId: string;
    /**
     * Jira Project Id
     */
    projectId: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Jira issue priorities
     */
    jiraIssuePriorities?: shared.JiraIssuePriority[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSON;
}
