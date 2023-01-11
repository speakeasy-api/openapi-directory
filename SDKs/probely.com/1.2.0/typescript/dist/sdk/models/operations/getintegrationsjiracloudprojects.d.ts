import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsJiraCloudProjects401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjects403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsResponse extends SpeakeasyBase {
    contentType: string;
    jiraProjects?: shared.JiraProject[];
    statusCode: number;
    getIntegrationsJiraCloudProjects401ApplicationJSONObject?: GetIntegrationsJiraCloudProjects401ApplicationJson;
    getIntegrationsJiraCloudProjects403ApplicationJSONObject?: GetIntegrationsJiraCloudProjects403ApplicationJson;
}
