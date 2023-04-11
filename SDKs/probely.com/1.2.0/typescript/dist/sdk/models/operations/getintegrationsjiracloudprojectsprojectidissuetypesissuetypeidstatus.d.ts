import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusRequest extends SpeakeasyBase {
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
 * Not found
 */
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Jira issue statuses
     */
    jiraIssueStatuses?: shared.JiraIssueStatus[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSON;
    /**
     * Not found
     */
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSON;
}
