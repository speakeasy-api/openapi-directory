import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Validation based on regular expressions.
 */
export declare class RegexValidation extends SpeakeasyBase {
    /**
     * Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).
     */
    regexes?: string[];
}
