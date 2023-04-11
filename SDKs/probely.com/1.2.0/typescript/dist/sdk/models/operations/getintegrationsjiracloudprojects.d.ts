import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class GetIntegrationsJiraCloudProjects403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetIntegrationsJiraCloudProjects401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsJiraCloudProjectsResponse extends SpeakeasyBase {
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
    getIntegrationsJiraCloudProjects401ApplicationJSONObject?: GetIntegrationsJiraCloudProjects401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getIntegrationsJiraCloudProjects403ApplicationJSONObject?: GetIntegrationsJiraCloudProjects403ApplicationJSON;
}
