import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorMessageParamsInvalidParameters extends SpeakeasyBase {
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
 * Invalid message parameters
 */
export declare class ErrorMessageParams extends SpeakeasyBase {
    /**
     * Additional information about the error
     */
    detail: string;
    /**
     * Internal Trace ID
     */
    instance: string;
    invalidParameters?: ErrorMessageParamsInvalidParameters[];
    /**
     * Generic error message
     */
    title: string;
    /**
     * Link to error / remediation options
     */
    type: string;
}
