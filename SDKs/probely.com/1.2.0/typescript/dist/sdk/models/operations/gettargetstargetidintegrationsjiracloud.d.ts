import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdIntegrationsJiraCloud403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdIntegrationsJiraCloud401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
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
    getTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraCloud401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraCloud403ApplicationJSON;
}
