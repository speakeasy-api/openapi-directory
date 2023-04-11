import { SpeakeasyBase } from "../../../internal/utils";
import { SourceApplication } from "./sourceapplication";
/**
 * Represents the quantity of an item variation that is physically present
 *
 * @remarks
 * at a specific location, verified by a seller or a seller's employee. For example,
 * a physical count might come from an employee counting the item variations on
 * hand or from syncing with an external system.
 */
export declare class InventoryPhysicalCount extends SpeakeasyBase {
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
     * An RFC 3339-formatted timestamp that indicates when the physical count is received.
     */
    createdAt?: string;
    /**
     * The Square-generated ID of the [Employee](https://developer.squareup.com/reference/square_2021-08-18/objects/Employee) responsible for the
     *
     * @remarks
     * physical count.
     */
    employeeId?: string;
    /**
     * A unique Square-generated ID for the
     *
     * @remarks
     * [InventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryPhysicalCount).
     */
    id?: string;
    /**
     * The Square-generated ID of the [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) where the related
     *
     * @remarks
     * quantity of items is being tracked.
     */
    locationId?: string;
    /**
     * A client-generated RFC 3339-formatted timestamp that indicates when
     *
     * @remarks
     * the physical count was examined. For physical count updates, the `occurred_at`
     * timestamp cannot be older than 24 hours or in the future relative to the
     * time of the request.
     */
    occurredAt?: string;
    /**
     * The number of items affected by the physical count as a decimal string.
     *
     * @remarks
     * The number can support up to 5 digits after the decimal point.
     */
    quantity?: string;
    /**
     * An optional ID provided by the application to tie the
     *
     * @remarks
     * [InventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryPhysicalCount) to an external
     * system.
     */
    referenceId?: string;
    /**
     * Provides information about the application used to generate a change.
     */
    source?: SourceApplication;
    /**
     * The current [inventory state](https://developer.squareup.com/reference/square_2021-08-18/enums/InventoryState) for the related
     *
     * @remarks
     * quantity of items.
     */
    state?: string;
}
