import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * The option to convert a string-type variable value to either lowercase or uppercase.
 */
export declare enum VariableFormatValueCaseConversionTypeEnum {
    None = "none",
    Lowercase = "lowercase",
    Uppercase = "uppercase"
}
export declare class VariableFormatValue extends SpeakeasyBase {
    /**
     * The option to convert a string-type variable value to either lowercase or uppercase.
     */
    caseConversionType?: VariableFormatValueCaseConversionTypeEnum;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    convertFalseToValue?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    convertNullToValue?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    convertTrueToValue?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    convertUndefinedToValue?: Parameter;
}
