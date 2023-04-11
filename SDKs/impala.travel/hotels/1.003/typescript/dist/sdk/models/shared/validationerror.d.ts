import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationResult } from "./validationresult";
/**
 * Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.
 */
export declare class ValidationError extends SpeakeasyBase {
    /**
     * Error code for you to use programatically, for error logging and debugging.
     */
    code?: string;
    /**
     * Error message intended to aid developers in debugging issues. We strongly advise against displaying this information publicly to your guests as it **might contain sensitive implementation details**.
     */
    message: string;
    validations?: ValidationResult[];
}
