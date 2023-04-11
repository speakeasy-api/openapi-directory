import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogItemModifierListInfo } from "./catalogitemmodifierlistinfo";
import { CatalogItemOptionForItem } from "./catalogitemoptionforitem";
import { CatalogObject } from "./catalogobject";
/**
 * A [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog.
 */
export declare class CatalogItem extends SpeakeasyBase {
    /**
     * The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used.
     *
     * @remarks
     * This attribute is searchable, and its value length is of Unicode code points.
     */
    abbreviation?: string;
    /**
     * If `true`, the item can be added to electronically fulfilled orders from the merchant's online store.
     */
    availableElectronically?: boolean;
    /**
     * If `true`, the item can be added to pickup orders from the merchant's online store.
     */
    availableForPickup?: boolean;
    /**
     * If `true`, the item can be added to shipping orders from the merchant's online store.
     */
    availableOnline?: boolean;
    /**
     * The ID of the item's category, if any.
     */
    categoryId?: string;
    /**
     * The item's description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     */
    description?: string;
    /**
     * List of item options IDs for this item. Used to manage and group item
     *
     * @remarks
     * variations in a specified order.
     *
     * Maximum: 6 item options.
     */
    itemOptions?: CatalogItemOptionForItem[];
    /**
     * The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code.
     */
    labelColor?: string;
    /**
     * A set of `CatalogItemModifierListInfo` objects
     *
     * @remarks
     * representing the modifier lists that apply to this item, along with the overrides and min
     * and max limits that are specific to this item. Modifier lists
     * may also be added to or deleted from an item using `UpdateItemModifierLists`.
     */
    modifierListInfo?: CatalogItemModifierListInfo[];
    /**
     * The item's name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points.
     */
    name?: string;
    /**
     * The product type of the item. May not be changed once an item has been created.
     *
     * @remarks
     *
     * Only items of product type `REGULAR` or `APPOINTMENTS_SERVICE` may be created by this API; items with other product
     * types are read-only.
     */
    productType?: string;
    /**
     * If `false`, the Square Point of Sale app will present the `CatalogItem`'s
     *
     * @remarks
     * details screen immediately, allowing the merchant to choose `CatalogModifier`s
     * before adding the item to the cart.  This is the default behavior.
     *
     * If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected
     * modifiers, and merchants can edit modifiers by drilling down onto the item's details.
     *
     * Third-party clients are encouraged to implement similar behaviors.
     */
    skipModifierScreen?: boolean;
    /**
     * A name to sort the item by. If this name is unspecified, namely, the `sort_name` field is absent, the regular `name` field is used for sorting.
     *
     * @remarks
     *
     * It is currently supported for sellers of the Japanese locale only.
     */
    sortName?: string;
    /**
     * A set of IDs indicating the taxes enabled for
     *
     * @remarks
     * this item. When updating an item, any taxes listed here will be added to the item.
     * Taxes may also be added to or deleted from an item using `UpdateItemTaxes`.
     */
    taxIds?: string[];
    /**
     * A list of [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) objects for this item. An item must have
     *
     * @remarks
     * at least one variation.
     */
    variations?: CatalogObject[];
}
