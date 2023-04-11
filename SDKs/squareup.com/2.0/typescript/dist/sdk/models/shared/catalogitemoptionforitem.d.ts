import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  An option that can be assigned to an item.
 *
 * @remarks
 * For example, a t-shirt item may offer a color option or a size option.
 */
export declare class CatalogItemOptionForItem extends SpeakeasyBase {
    /**
     * The unique id of the item option, used to form the dimensions of the item option matrix in a specified order.
     */
    itemOptionId?: string;
}
