import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams extends SpeakeasyBase {
    issueTypeId: string;
    projectId: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusRequest extends SpeakeasyBase {
    pathParams: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusResponse extends SpeakeasyBase {
    contentType: string;
    jiraIssueStatuses?: shared.JiraIssueStatus[];
    statusCode: number;
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson;
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson;
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson;
}
