import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    jiraFinding: shared.JiraFinding;
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
 * Not found
 */
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
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
    putTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSON;
}
