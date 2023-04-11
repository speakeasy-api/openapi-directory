import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
import { Money } from "./money";
/**
 * A single list item. Each variation of an item in the price list should have its own Item with its own price data.
 */
export declare class Item extends SpeakeasyBase {
    /**
     * Required. ID for the item. Price list, section, and item IDs cannot be duplicated within this Location.
     */
    itemId?: string;
    /**
     * Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. At least one set of labels is required.
     */
    labels?: Label[];
    /**
     * Represents an amount of money with its currency type.
     */
    price?: Money;
}
