import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemPricingBlocklistsBlockedDiscount } from "./orderlineitempricingblocklistsblockeddiscount";
import { OrderLineItemPricingBlocklistsBlockedTax } from "./orderlineitempricingblocklistsblockedtax";
/**
 * Describes pricing adjustments that are blocked from manual and
 *
 * @remarks
 * automatic application to a line item. For more information, see
 * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
 */
export declare class OrderLineItemPricingBlocklists extends SpeakeasyBase {
    /**
     * A list of discounts blocked from applying to the line item.
     *
     * @remarks
     * Discounts can be blocked by the `discount_uid` (for ad hoc discounts) or
     * the `discount_catalog_object_id` (for catalog discounts).
     */
    blockedDiscounts?: OrderLineItemPricingBlocklistsBlockedDiscount[];
    /**
     * A list of taxes blocked from applying to the line item.
     *
     * @remarks
     * Taxes can be blocked by the `tax_uid` (for ad hoc taxes) or
     * the `tax_catalog_object_id` (for catalog taxes).
     */
    blockedTaxes?: OrderLineItemPricingBlocklistsBlockedTax[];
}
