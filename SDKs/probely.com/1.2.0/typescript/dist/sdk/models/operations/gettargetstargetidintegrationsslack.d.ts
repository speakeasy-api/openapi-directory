import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdIntegrationsSlack403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdIntegrationsSlack401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Slack integration
     */
    slack?: shared.Slack;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsSlack401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsSlack403ApplicationJSON;
}
