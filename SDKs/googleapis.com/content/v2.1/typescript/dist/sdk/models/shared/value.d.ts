import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
 */
export declare class Value extends SpeakeasyBase {
    /**
     * The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set.
     */
    carrierRateName?: string;
    flatRate?: Price;
    /**
     * If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set.
     */
    noShipping?: boolean;
    /**
     * A percentage of the price represented as a number in decimal notation (for example, `"5.4"`). Can only be set if all other fields are not set.
     */
    pricePercentage?: string;
    /**
     * The name of a subtable. Can only be set in table cells (not for single values), and only if all other fields are not set.
     */
    subtableName?: string;
}
