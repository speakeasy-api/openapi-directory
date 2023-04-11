import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedPropertyBundle } from "./managedpropertybundle";
/**
 * A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.
 */
export declare class ManagedProperty extends SpeakeasyBase {
    /**
     * The unique key that identifies the property.
     */
    key?: string;
    /**
     * The boolean value - this will only be present if type of the property is bool.
     */
    valueBool?: boolean;
    /**
     * A bundle of managed properties.
     */
    valueBundle?: ManagedPropertyBundle;
    /**
     * The list of bundles of properties - this will only be present if type of the property is bundle_array.
     */
    valueBundleArray?: ManagedPropertyBundle[];
    /**
     * The integer value - this will only be present if type of the property is integer.
     */
    valueInteger?: number;
    /**
     * The string value - this will only be present if type of the property is string, choice or hidden.
     */
    valueString?: string;
    /**
     * The list of string values - this will only be present if type of the property is multiselect.
     */
    valueStringArray?: string[];
}
