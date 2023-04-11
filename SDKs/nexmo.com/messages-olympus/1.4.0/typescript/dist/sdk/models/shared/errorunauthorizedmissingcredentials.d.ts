import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Missing or Invalid Credentials
 */
export declare class ErrorUnauthorizedMissingCredentials extends SpeakeasyBase {
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
