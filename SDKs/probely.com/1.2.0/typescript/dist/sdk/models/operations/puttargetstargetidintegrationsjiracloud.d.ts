import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    jiraScope: shared.JiraScope;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PutTargetsTargetIdIntegrationsJiraCloud404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdIntegrationsJiraCloud403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdIntegrationsJiraCloud401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
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
    putTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud404ApplicationJSON;
}
