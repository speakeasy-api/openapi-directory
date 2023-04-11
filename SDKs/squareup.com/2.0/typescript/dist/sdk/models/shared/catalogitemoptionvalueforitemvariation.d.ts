import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A `CatalogItemOptionValue` links an item variation to an item option as
 *
 * @remarks
 * an item option value. For example, a t-shirt item may offer a color option and
 * a size option. An item option value would represent each variation of t-shirt:
 * For example, "Color:Red, Size:Small" or "Color:Blue, Size:Medium".
 */
export declare class CatalogItemOptionValueForItemVariation extends SpeakeasyBase {
    /**
     * The unique id of an item option.
     */
    itemOptionId?: string;
    /**
     * The unique id of the selected value for the item option.
     */
    itemOptionValueId?: string;
}
