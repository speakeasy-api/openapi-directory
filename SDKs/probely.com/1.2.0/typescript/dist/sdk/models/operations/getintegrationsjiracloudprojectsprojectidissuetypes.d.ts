import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesRequest extends SpeakeasyBase {
    /**
     * Jira Project Id
     */
    projectId: string;
}
/**
 * Not found
 */
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse extends SpeakeasyBase {
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
    getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSON;
    /**
     * Not found
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSON;
}
