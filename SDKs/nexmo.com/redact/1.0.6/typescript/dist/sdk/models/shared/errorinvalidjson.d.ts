import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Invalid JSON
 */
export declare class ErrorInvalidJson extends SpeakeasyBase {
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
