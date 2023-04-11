import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Price and inventory alerting overrides for a `CatalogItemVariation` at a specific `Location`.
 */
export declare class ItemVariationLocationOverrides extends SpeakeasyBase {
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
     * Indicates whether the `CatalogItemVariation` displays an alert when its inventory
     *
     * @remarks
     * quantity is less than or equal to its `inventory_alert_threshold`.
     */
    inventoryAlertType?: string;
    /**
     * The ID of the `Location`. This can include locations that are deactivated.
     */
    locationId?: string;
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
     * The pricing type (fixed or variable) for the `CatalogItemVariation` at the given `Location`.
     */
    pricingType?: string;
    /**
     * If `true`, inventory tracking is active for the `CatalogItemVariation` at this `Location`.
     */
    trackInventory?: boolean;
}
