import { SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchemaRestrictionRestrictionValue } from "./apprestrictionsschemarestrictionrestrictionvalue";
/**
 * The type of the restriction.
 */
export declare enum AppRestrictionsSchemaRestrictionRestrictionTypeEnum {
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
 * A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.
 */
export declare class AppRestrictionsSchemaRestriction extends SpeakeasyBase {
    /**
     * A typed value for the restriction.
     */
    defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue;
    /**
     * A longer description of the restriction, giving more detail of what it affects.
     */
    description?: string;
    /**
     * For choice or multiselect restrictions, the list of possible entries' human-readable names.
     */
    entry?: string[];
    /**
     * For choice or multiselect restrictions, the list of possible entries' machine-readable values. These values should be used in the configuration, either as a single string value for a choice restriction or in a stringArray for a multiselect restriction.
     */
    entryValue?: string[];
    /**
     * The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname".
     */
    key?: string;
    /**
     * For bundle or bundleArray restrictions, the list of nested restrictions. A bundle restriction is always nested within a bundleArray restriction, and a bundleArray restriction is at most two levels deep.
     */
    nestedRestriction?: AppRestrictionsSchemaRestriction[];
    /**
     * The type of the restriction.
     */
    restrictionType?: AppRestrictionsSchemaRestrictionRestrictionTypeEnum;
    /**
     * The name of the restriction.
     */
    title?: string;
}
