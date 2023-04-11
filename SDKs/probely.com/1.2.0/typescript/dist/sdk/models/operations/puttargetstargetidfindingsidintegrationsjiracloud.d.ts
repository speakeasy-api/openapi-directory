import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
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
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Jira Cloud Finding configuration
     */
    jiraFinding?: shared.JiraFinding;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    putTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSON;
}
