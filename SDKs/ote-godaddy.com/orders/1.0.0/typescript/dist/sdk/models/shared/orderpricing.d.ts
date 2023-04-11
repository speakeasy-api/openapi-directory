import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemPricingTaxDetail } from "./lineitempricingtaxdetail";
import { OrderFee } from "./orderfee";
export declare class OrderPricing extends SpeakeasyBase {
    /**
     * Discount from promotional pricing
     */
    discount: number;
    fees: OrderFee;
    id?: number;
    /**
     * Sum of list prices for the entire cart
     */
    list: number;
    /**
     * Savings off of list price <pre>`savings` = `list` - `subtotal`</pre>
     */
    savings: number;
    /**
     * Price with `discount` and without taxes or fees
     */
    subtotal: number;
    /**
     * A collection of line item tax details
     */
    taxDetails?: LineItemPricingTaxDetail[];
    /**
     * Taxes for the entire cart
     */
    taxes: number;
    /**
     * Price the customer pays <pre>`total` = `subtotal` + `taxes` + `fees.total`</pre>
     */
    total: number;
}
