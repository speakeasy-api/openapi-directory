import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
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
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
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
    patchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSON;
}
