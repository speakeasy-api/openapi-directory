import { SpeakeasyBase } from "../../../internal/utils";
import { NamedProperty } from "./namedproperty";
/**
 * A structured data object consisting of named properties.
 */
export declare class StructuredDataObject extends SpeakeasyBase {
    /**
     * The properties for the object. The maximum number of elements is 1000.
     */
    properties?: NamedProperty[];
}
