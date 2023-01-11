import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesRequest extends SpeakeasyBase {
    pathParams: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesPathParams;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesResponse extends SpeakeasyBase {
    contentType: string;
    jiraIssueTypes?: shared.JiraIssueType[];
    statusCode: number;
    getIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes401ApplicationJson;
    getIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes403ApplicationJson;
    getIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypes404ApplicationJson;
}
