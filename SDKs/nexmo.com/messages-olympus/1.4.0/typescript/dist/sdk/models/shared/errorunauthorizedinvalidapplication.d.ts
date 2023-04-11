import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Invalid Application Type
 */
export declare class ErrorUnauthorizedInvalidApplication extends SpeakeasyBase {
    /**
     * Additional information about the error
     */
    detail?: string;
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
