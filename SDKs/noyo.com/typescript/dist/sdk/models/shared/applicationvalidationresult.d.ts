import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationValidationError } from "./applicationvalidationerror";
/**
 * Failure Response - Invalid group application - Non-empty list of errors returned
 */
export declare class ApplicationValidationResult extends SpeakeasyBase {
    /**
     * Collection of errors that occurred during group application validation
     */
    validationErrors: ApplicationValidationError[];
}
