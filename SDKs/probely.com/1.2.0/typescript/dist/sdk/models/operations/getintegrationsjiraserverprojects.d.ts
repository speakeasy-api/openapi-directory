import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class GetIntegrationsJiraServerProjects403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetIntegrationsJiraServerProjects401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraServerProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Jira projects
     */
    jiraProjects?: shared.JiraProject[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getIntegrationsJiraServerProjects401ApplicationJSONObject?: GetIntegrationsJiraServerProjects401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getIntegrationsJiraServerProjects403ApplicationJSONObject?: GetIntegrationsJiraServerProjects403ApplicationJSON;
}
