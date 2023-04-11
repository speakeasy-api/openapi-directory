import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
/**
 * Validation Error
 */
export declare class HTTPValidationError extends SpeakeasyBase {
    detail?: ValidationError[];
}
