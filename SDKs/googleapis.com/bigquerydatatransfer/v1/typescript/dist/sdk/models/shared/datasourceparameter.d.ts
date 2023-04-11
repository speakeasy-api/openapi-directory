import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameter type.
 */
export declare enum DataSourceParameterTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    String = "STRING",
    Integer = "INTEGER",
    Double = "DOUBLE",
    Boolean = "BOOLEAN",
    Record = "RECORD",
    PlusPage = "PLUS_PAGE"
}
/**
 * A parameter used to define custom fields in a data source definition.
 */
export declare class DataSourceParameter extends SpeakeasyBase {
    /**
     * All possible values for the parameter.
     */
    allowedValues?: string[];
    /**
     * If true, it should not be used in new transfers, and it should not be visible to users.
     */
    deprecated?: boolean;
    /**
     * Parameter description.
     */
    description?: string;
    /**
     * Parameter display name in the user interface.
     */
    displayName?: string;
    /**
     * Deprecated. This field has no effect.
     */
    fields?: DataSourceParameter[];
    /**
     * Cannot be changed after initial creation.
     */
    immutable?: boolean;
    /**
     * For integer and double values specifies maximum allowed value.
     */
    maxValue?: number;
    /**
     * For integer and double values specifies minimum allowed value.
     */
    minValue?: number;
    /**
     * Parameter identifier.
     */
    paramId?: string;
    /**
     * Deprecated. This field has no effect.
     */
    recurse?: boolean;
    /**
     * Deprecated. This field has no effect.
     */
    repeated?: boolean;
    /**
     * Is parameter required.
     */
    required?: boolean;
    /**
     * Parameter type.
     */
    type?: DataSourceParameterTypeEnum;
    /**
     * Description of the requirements for this field, in case the user input does not fulfill the regex pattern or min/max values.
     */
    validationDescription?: string;
    /**
     * URL to a help document to further explain the naming requirements.
     */
    validationHelpUrl?: string;
    /**
     * Regular expression which can be used for parameter validation.
     */
    validationRegex?: string;
}
