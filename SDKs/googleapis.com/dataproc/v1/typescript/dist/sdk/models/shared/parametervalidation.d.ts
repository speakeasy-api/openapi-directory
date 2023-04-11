import { SpeakeasyBase } from "../../../internal/utils";
import { RegexValidation } from "./regexvalidation";
import { ValueValidation } from "./valuevalidation";
/**
 * Configuration for parameter validation.
 */
export declare class ParameterValidation extends SpeakeasyBase {
    /**
     * Validation based on regular expressions.
     */
    regex?: RegexValidation;
    /**
     * Validation based on a list of allowed values.
     */
    values?: ValueValidation;
}
