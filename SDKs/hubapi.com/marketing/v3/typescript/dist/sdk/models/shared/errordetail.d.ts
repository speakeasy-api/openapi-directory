import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorDetail extends SpeakeasyBase {
    /**
     * The status code associated with the error detail
     */
    code?: string;
    /**
     * Context about the error condition
     */
    context?: Record<string, string[]>;
    /**
     * The name of the field or parameter in which the error was found.
     */
    in?: string;
    /**
     * A human readable message describing the error along with remediation steps where appropriate
     */
    message: string;
    /**
     * A specific category that contains more specific detail about the error
     */
    subCategory?: string;
}
