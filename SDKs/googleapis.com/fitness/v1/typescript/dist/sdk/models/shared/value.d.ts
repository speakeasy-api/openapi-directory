import { SpeakeasyBase } from "../../../internal/utils";
import { ValueMapValEntry } from "./valuemapvalentry";
/**
 * Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
 */
export declare class Value extends SpeakeasyBase {
    /**
     * Floating point value. When this is set, other values must not be set.
     */
    fpVal?: number;
    /**
     * Integer value. When this is set, other values must not be set.
     */
    intVal?: number;
    /**
     * Map value. The valid key space and units for the corresponding value of each entry should be documented as part of the data type definition. Keys should be kept small whenever possible. Data streams with large keys and high data frequency may be down sampled.
     */
    mapVal?: ValueMapValEntry[];
    /**
     * String value. When this is set, other values must not be set. Strings should be kept small whenever possible. Data streams with large string values and high data frequency may be down sampled.
     */
    stringVal?: string;
}
