import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * An error occurred.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The error category
     */
    category: string;
    /**
     * Context about the error condition
     */
    context?: Record<string, string[]>;
    /**
     * A unique identifier for the request. Include this value with any error reports or support tickets
     */
    correlationId: string;
    /**
     * further information about the error
     */
    errors?: ErrorDetail[];
    /**
     * A map of link names to associated URIs containing documentation about the error or recommended remediation steps
     */
    links?: Record<string, string>;
    /**
     * A human readable message describing the error along with remediation steps where appropriate
     */
    message: string;
    /**
     * A specific category that contains more specific detail about the error
     */
    subCategory?: string;
}
