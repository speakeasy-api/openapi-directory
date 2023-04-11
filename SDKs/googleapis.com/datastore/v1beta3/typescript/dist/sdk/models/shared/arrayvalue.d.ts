import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * An array value.
 */
export declare class ArrayValue extends SpeakeasyBase {
    /**
     * Values in the array. The order of values in an array is preserved as long as all values have identical settings for 'exclude_from_indexes'.
     */
    values?: Value[];
}
