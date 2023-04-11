import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
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
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
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
    getTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSON;
}
