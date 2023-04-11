import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Invalid message type
 */
export declare class ErrorMessageType extends SpeakeasyBase {
    /**
     * Additional information about the error
     */
    detail: string;
    /**
     * Internal Trace ID
     */
    instance: string;
    /**
     * Generic error message
     */
    title: string;
    /**
     * Link to error / remediation options
     */
    type: string;
}
