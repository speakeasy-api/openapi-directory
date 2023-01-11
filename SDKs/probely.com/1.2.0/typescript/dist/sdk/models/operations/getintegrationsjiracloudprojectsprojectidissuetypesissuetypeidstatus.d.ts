import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams extends SpeakeasyBase {
    issueTypeId: string;
    projectId: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusRequest extends SpeakeasyBase {
    pathParams: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams;
}
export declare class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusResponse extends SpeakeasyBase {
    contentType: string;
    jiraIssueStatuses?: shared.JiraIssueStatus[];
    statusCode: number;
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus401ApplicationJson;
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus403ApplicationJson;
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJSONObject?: GetIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus404ApplicationJson;
}
