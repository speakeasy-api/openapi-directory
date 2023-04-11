import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest extends SpeakeasyBase {
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
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse extends SpeakeasyBase {
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
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSON;
}
