import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    jiraScope: shared.JiraScope;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PatchTargetsTargetIdIntegrationsJiraServer404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdIntegrationsJiraServer403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdIntegrationsJiraServer401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Jira Server target configuration
     */
    jiraScope?: shared.JiraScope;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    patchTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer404ApplicationJSON;
}
