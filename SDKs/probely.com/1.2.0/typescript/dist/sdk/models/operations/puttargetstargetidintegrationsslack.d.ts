import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
    slack: shared.Slack;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PutTargetsTargetIdIntegrationsSlack404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdIntegrationsSlack403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdIntegrationsSlack401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
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
    putTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdIntegrationsSlack404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack404ApplicationJSON;
}
