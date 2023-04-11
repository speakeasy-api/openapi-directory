import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    jiraScope: shared.JiraScope;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PutTargetsTargetIdIntegrationsJiraServer404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdIntegrationsJiraServer403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdIntegrationsJiraServer401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
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
    putTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer404ApplicationJSON;
}
