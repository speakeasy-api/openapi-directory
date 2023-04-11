import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.
 */
export declare class Capacity extends SpeakeasyBase {
    /**
     * The unit of the capacity, i.e., MB, GB, or TB.
     */
    unit?: string;
    /**
     * The numeric value of the capacity.
     */
    value?: string;
}
