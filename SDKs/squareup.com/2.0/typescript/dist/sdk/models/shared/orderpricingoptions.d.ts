import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pricing options for an order. The options affect how the order's price is calculated.
 *
 * @remarks
 * They can be used, for example, to apply automatic price adjustments that are based on preconfigured
 * [pricing rules](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogPricingRule).
 */
export declare class OrderPricingOptions extends SpeakeasyBase {
    /**
     * The option to determine whether pricing rule-based
     *
     * @remarks
     * discounts are automatically applied to an order.
     */
    autoApplyDiscounts?: boolean;
    /**
     * The option to determine whether rule-based taxes are automatically
     *
     * @remarks
     * applied to an order when the criteria of the corresponding rules are met.
     */
    autoApplyTaxes?: boolean;
}
