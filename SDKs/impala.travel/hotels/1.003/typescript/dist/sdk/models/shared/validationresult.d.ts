import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the validation that failed.
 */
export declare class ValidationResult extends SpeakeasyBase {
    /**
     * Error code intended for logging and debugging.
     */
    code: string;
    /**
     * Name of the field that has failed to validate. Intended to aid developers in finding and fixing implementation mistakes.
     */
    field?: string;
    /**
     * Error message in English intended to aid developers in finding and solving implementation mistakes. Do not display to your guests as it **might contain sensitive implementation information**.
     */
    message: string;
}
