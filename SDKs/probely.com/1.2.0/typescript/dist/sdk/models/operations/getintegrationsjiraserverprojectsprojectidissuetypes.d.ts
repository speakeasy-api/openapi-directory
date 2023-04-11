import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest extends SpeakeasyBase {
    /**
     * Jira Project Id
     */
    projectId: string;
}
/**
 * Not found
 */
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Jira issue types available in project
     */
    jiraIssueTypes?: shared.JiraIssueType[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSON;
    /**
     * Not found
     */
    getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSON;
}
