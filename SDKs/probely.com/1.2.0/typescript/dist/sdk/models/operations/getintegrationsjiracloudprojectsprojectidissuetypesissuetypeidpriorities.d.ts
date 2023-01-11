import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesPathParams extends SpeakeasyBase {
    issueTypeId: string;
    projectId: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesRequest extends SpeakeasyBase {
    pathParams: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesPathParams;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesResponse extends SpeakeasyBase {
    contentType: string;
    jiraIssuePriorities?: shared.JiraIssuePriority[];
    statusCode: number;
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities401ApplicationJson;
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities403ApplicationJson;
}
