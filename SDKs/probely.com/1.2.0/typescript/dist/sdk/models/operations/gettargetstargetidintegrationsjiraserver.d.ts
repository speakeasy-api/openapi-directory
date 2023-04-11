import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdIntegrationsJiraServer403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdIntegrationsJiraServer401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
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
    getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraServer401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraServer403ApplicationJSON;
}
