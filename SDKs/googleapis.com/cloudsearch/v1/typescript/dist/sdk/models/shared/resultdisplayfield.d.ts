import { SpeakeasyBase } from "../../../internal/utils";
import { NamedProperty } from "./namedproperty";
/**
 * Display Fields for Search Results
 */
export declare class ResultDisplayField extends SpeakeasyBase {
    /**
     * The display label for the property.
     */
    label?: string;
    /**
     * The operator name of the property.
     */
    operatorName?: string;
    /**
     * A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
     */
    property?: NamedProperty;
}
