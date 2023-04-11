import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    jiraScope: shared.JiraScope;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PatchTargetsTargetIdIntegrationsJiraCloud404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdIntegrationsJiraCloud403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdIntegrationsJiraCloud401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Jira Cloud Target configuration
     */
    jiraScope?: shared.JiraScope;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    patchTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud404ApplicationJSON;
}
