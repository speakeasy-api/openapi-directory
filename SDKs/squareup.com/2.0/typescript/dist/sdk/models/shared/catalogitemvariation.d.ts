import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogItemOptionValueForItemVariation } from "./catalogitemoptionvalueforitemvariation";
import { CatalogStockConversion } from "./catalogstockconversion";
import { ItemVariationLocationOverrides } from "./itemvariationlocationoverrides";
import { Money } from "./money";
/**
 * An item variation (i.e., product) in the Catalog object model. Each item
 *
 * @remarks
 * may have a maximum of 250 item variations.
 */
export declare class CatalogItemVariation extends SpeakeasyBase {
    /**
     * If the `CatalogItem` that owns this item variation is of type
     *
     * @remarks
     * `APPOINTMENTS_SERVICE`, a bool representing whether this service is available for booking.
     */
    availableForBooking?: boolean;
    /**
     * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
     *
     * @remarks
     * is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.
     *
     * This value is always an integer.
     */
    inventoryAlertThreshold?: number;
    /**
     * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal
     *
     * @remarks
     * to its `inventory_alert_threshold`.
     */
    inventoryAlertType?: string;
    /**
     * The ID of the `CatalogItem` associated with this item variation.
     */
    itemId?: string;
    /**
     * List of item option values associated with this item variation. Listed
     *
     * @remarks
     * in the same order as the item options of the parent item.
     */
    itemOptionValues?: CatalogItemOptionValueForItemVariation[];
    /**
     * Per-location price and inventory overrides.
     */
    locationOverrides?: ItemVariationLocationOverrides[];
    /**
     * ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity
     *
     * @remarks
     * sold of this item variation. If left unset, the item will be sold in
     * whole quantities.
     */
    measurementUnitId?: string;
    /**
     * The item variation's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     */
    name?: string;
    /**
     * The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal
     *
     * @remarks
     * for each item variation within a parent `CatalogItem` is set according to the item variations's
     * position. On reads, the value is not guaranteed to be sequential or unique.
     */
    ordinal?: number;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    priceMoney?: Money;
    /**
     * Indicates whether the item variation's price is fixed or determined at the time
     *
     * @remarks
     * of sale.
     */
    pricingType?: string;
    /**
     * If the `CatalogItem` that owns this item variation is of type
     *
     * @remarks
     * `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For
     * example, a 30 minute appointment would have the value `1800000`, which is equal to
     * 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
     */
    serviceDuration?: number;
    /**
     * The item variation's SKU, if any. This is a searchable attribute for use in applicable query filters.
     */
    sku?: string;
    /**
     * Whether stock is counted directly on this variation (TRUE) or only on its components (FALSE).
     *
     * @remarks
     * For backward compatibility missing values will be interpreted as TRUE.
     */
    stockable?: boolean;
    /**
     * Represents the rule of conversion between a stockable [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
     *
     * @remarks
     * and a non-stockable sell-by or receive-by `CatalogItemVariation` that
     * share the same underlying stock.
     */
    stockableConversion?: CatalogStockConversion;
    /**
     * Tokens of employees that can perform the service represented by this variation. Only valid for
     *
     * @remarks
     * variations of type `APPOINTMENTS_SERVICE`.
     */
    teamMemberIds?: string[];
    /**
     * If `true`, inventory tracking is active for the variation.
     */
    trackInventory?: boolean;
    /**
     * The universal product code (UPC) of the item variation, if any. This is a searchable attribute for use in applicable query filters.
     *
     * @remarks
     *
     * The value of this attribute should be a number of 12-14 digits long.  This restriction is enforced on the Square Seller Dashboard,
     * Square Point of Sale or Retail Point of Sale apps, where this attribute shows in the GTIN field. If a non-compliant UPC value is assigned
     * to this attribute using the API, the value is not editable on the Seller Dashboard, Square Point of Sale or Retail Point of Sale apps
     * unless it is updated to fit the expected format.
     */
    upc?: string;
    /**
     * Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points.
     */
    userData?: string;
}
