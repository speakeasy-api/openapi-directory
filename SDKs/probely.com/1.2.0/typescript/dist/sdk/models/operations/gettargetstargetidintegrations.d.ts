import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdIntegrationsRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdIntegrations403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdIntegrations401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Available and installed integrations for the target
     */
    integrations?: shared.Integrations;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdIntegrations401ApplicationJSONObject?: GetTargetsTargetIdIntegrations401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdIntegrations403ApplicationJSONObject?: GetTargetsTargetIdIntegrations403ApplicationJSON;
}
