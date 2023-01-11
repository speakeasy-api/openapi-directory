import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesPathParams extends SpeakeasyBase {
    issueTypeId: string;
    projectId: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest extends SpeakeasyBase {
    pathParams: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesPathParams;
}
export declare class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse extends SpeakeasyBase {
    contentType: string;
    jiraIssuePriorities?: shared.JiraIssuePriority[];
    statusCode: number;
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson;
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject?: GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson;
}
