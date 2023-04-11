import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
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
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
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
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSON;
}
