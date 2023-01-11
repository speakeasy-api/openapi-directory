import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesRequest extends SpeakeasyBase {
    pathParams: GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesResponse extends SpeakeasyBase {
    contentType: string;
    jiraIssueTypes?: shared.JiraIssueType[];
    statusCode: number;
    getIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes401ApplicationJson;
    getIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes403ApplicationJson;
    getIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypes404ApplicationJson;
}
