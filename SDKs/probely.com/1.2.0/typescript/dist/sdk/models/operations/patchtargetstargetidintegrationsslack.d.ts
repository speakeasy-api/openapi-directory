import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
    slack: shared.Slack;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PatchTargetsTargetIdIntegrationsSlack404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdIntegrationsSlack403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdIntegrationsSlack401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
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
    patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack404ApplicationJSON;
}
