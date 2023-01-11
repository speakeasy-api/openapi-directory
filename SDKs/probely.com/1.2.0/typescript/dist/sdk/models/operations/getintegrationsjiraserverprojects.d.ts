import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsJiraServerProjects401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjects403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsResponse extends SpeakeasyBase {
    contentType: string;
    jiraProjects?: shared.JiraProject[];
    statusCode: number;
    getIntegrationsJiraServerProjects401ApplicationJSONObject?: GetIntegrationsJiraServerProjects401ApplicationJson;
    getIntegrationsJiraServerProjects403ApplicationJSONObject?: GetIntegrationsJiraServerProjects403ApplicationJson;
}
