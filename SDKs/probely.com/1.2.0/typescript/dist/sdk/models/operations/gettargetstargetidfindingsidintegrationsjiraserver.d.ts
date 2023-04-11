import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Jira Server finding configuration
     */
    jiraFinding?: shared.JiraFinding;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSON;
}
