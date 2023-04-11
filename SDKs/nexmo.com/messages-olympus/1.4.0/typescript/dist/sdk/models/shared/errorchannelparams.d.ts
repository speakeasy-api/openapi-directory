import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorChannelParamsInvalidParameters extends SpeakeasyBase {
    /**
     * Name of invalid parameter
     */
    name?: string;
    /**
     * Reason of failure
     */
    reason?: string;
}
/**
 * Invalid channel parameters
 */
export declare class ErrorChannelParams extends SpeakeasyBase {
    /**
     * Additional information about the error
     */
    detail: string;
    /**
     * Internal Trace ID
     */
    instance: string;
    invalidParameters?: ErrorChannelParamsInvalidParameters[];
    /**
     * Generic error message
     */
    title: string;
    /**
     * Link to error / remediation options
     */
    type: string;
}
