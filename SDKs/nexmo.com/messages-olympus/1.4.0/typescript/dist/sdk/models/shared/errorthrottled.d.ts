import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Too Many Requests
 */
export declare class ErrorThrottled extends SpeakeasyBase {
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
