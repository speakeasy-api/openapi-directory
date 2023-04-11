import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for a parameter used in various reports.
 */
export declare class NestedParameter extends SpeakeasyBase {
    /**
     * Boolean value of the parameter.
     */
    boolValue?: boolean;
    /**
     * Integer value of the parameter.
     */
    intValue?: string;
    /**
     * Multiple boolean values of the parameter.
     */
    multiBoolValue?: boolean[];
    /**
     * Multiple integer values of the parameter.
     */
    multiIntValue?: string[];
    /**
     * Multiple string values of the parameter.
     */
    multiValue?: string[];
    /**
     * The name of the parameter.
     */
    name?: string;
    /**
     * String value of the parameter.
     */
    value?: string;
}
