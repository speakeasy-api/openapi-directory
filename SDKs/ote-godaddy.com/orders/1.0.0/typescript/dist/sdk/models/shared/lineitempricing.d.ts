import { SpeakeasyBase } from "../../../internal/utils";
import { OrderFee } from "./orderfee";
export declare class LineItemPricing extends SpeakeasyBase {
    /**
     * Discount off of sale price for given `quantity` and `period` <pre>`discount` = `sale` - `subtotal`</pre>
     */
    discount: number;
    fees: OrderFee;
    /**
     * List price for given `quantity` and `period`
     */
    list: number;
    /**
     * Actual price for the current product
     */
    sale: number;
    /**
     * Savings off of list price for given `quantity` and `period` <pre>`savings` = `list` - `subtotal`</pre>
     */
    savings: number;
    /**
     * Price with any discounts and without taxes or fees for given `quantity` and `period`
     */
    subtotal: number;
    /**
     * Taxes for given `quantity` and `period`
     */
    taxes: number;
    /**
     * Pricing for a single unit of the given item
     */
    unit: Record<string, any>;
}
