import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents Square-estimated quantity of items in a particular state at a
 *
 * @remarks
 * particular seller location based on the known history of physical counts and
 * inventory adjustments.
 */
export declare class InventoryCount extends SpeakeasyBase {
    /**
     * An RFC 3339-formatted timestamp that indicates when the most recent physical count or adjustment affecting
     *
     * @remarks
     * the estimated count is received.
     */
    calculatedAt?: string;
    /**
     * The Square-generated ID of the
     *
     * @remarks
     * [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) being tracked.
     */
    catalogObjectId?: string;
    /**
     * The [type](https://developer.squareup.com/reference/square_2021-08-18/enums/CatalogObjectType) of the
     *
     * @remarks
     * [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) being tracked. Tracking is only
     * supported for the `ITEM_VARIATION` type.
     */
    catalogObjectType?: string;
    /**
     * Whether the inventory count is for composed variation (TRUE) or not (FALSE). If true, the inventory count will not be present in the response of
     *
     * @remarks
     * any of these endpoints: [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-change-inventory),
     * [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes),
     * [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-counts), and
     * [RetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-changes).
     */
    isEstimated?: boolean;
    /**
     * The Square-generated ID of the [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) where the related
     *
     * @remarks
     * quantity of items is being tracked.
     */
    locationId?: string;
    /**
     * The number of items affected by the estimated count as a decimal string.
     *
     * @remarks
     * Can support up to 5 digits after the decimal point.
     */
    quantity?: string;
    /**
     * The current [inventory state](https://developer.squareup.com/reference/square_2021-08-18/enums/InventoryState) for the related
     *
     * @remarks
     * quantity of items.
     */
    state?: string;
}
