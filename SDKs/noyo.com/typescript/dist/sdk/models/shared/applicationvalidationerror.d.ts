import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApplicationValidationError extends SpeakeasyBase {
    /**
     * The location of the error in the group application
     */
    errorLocation?: string;
    /**
     * A message describing the error that occurred during group application validation.
     */
    errorMessage?: string;
    /**
     * The type of error that occurred during group application validation
     */
    errorType?: string;
}
