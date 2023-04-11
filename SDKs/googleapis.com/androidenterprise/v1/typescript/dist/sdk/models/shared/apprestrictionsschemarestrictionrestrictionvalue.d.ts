import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the value being provided.
 */
export declare enum AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum {
    Bool = "bool",
    String = "string",
    Integer = "integer",
    Choice = "choice",
    Multiselect = "multiselect",
    Hidden = "hidden",
    Bundle = "bundle",
    BundleArray = "bundleArray"
}
/**
 * A typed value for the restriction.
 */
export declare class AppRestrictionsSchemaRestrictionRestrictionValue extends SpeakeasyBase {
    /**
     * The type of the value being provided.
     */
    type?: AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum;
    /**
     * The boolean value - this will only be present if type is bool.
     */
    valueBool?: boolean;
    /**
     * The integer value - this will only be present if type is integer.
     */
    valueInteger?: number;
    /**
     * The list of string values - this will only be present if type is multiselect.
     */
    valueMultiselect?: string[];
    /**
     * The string value - this will be present for types string, choice and hidden.
     */
    valueString?: string;
}
