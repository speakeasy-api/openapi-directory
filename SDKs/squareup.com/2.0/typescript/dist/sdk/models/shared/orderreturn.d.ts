import { SpeakeasyBase } from "../../../internal/utils";
import { OrderMoneyAmounts } from "./ordermoneyamounts";
import { OrderReturnDiscount } from "./orderreturndiscount";
import { OrderReturnLineItem } from "./orderreturnlineitem";
import { OrderReturnServiceCharge } from "./orderreturnservicecharge";
import { OrderReturnTax } from "./orderreturntax";
import { OrderRoundingAdjustment } from "./orderroundingadjustment";
/**
 * The set of line items, service charges, taxes, discounts, tips, and other items being returned in an order.
 */
export declare class OrderReturn extends SpeakeasyBase {
    /**
     * A collection of various money amounts.
     */
    returnAmounts?: OrderMoneyAmounts;
    /**
     * A collection of references to discounts being returned for an order, including the total
     *
     * @remarks
     * applied discount amount to be returned. The discounts must reference a top-level discount ID
     * from the source order.
     */
    returnDiscounts?: OrderReturnDiscount[];
    /**
     * A collection of line items that are being returned.
     */
    returnLineItems?: OrderReturnLineItem[];
    /**
     * A collection of service charges that are being returned.
     */
    returnServiceCharges?: OrderReturnServiceCharge[];
    /**
     * A collection of references to taxes being returned for an order, including the total
     *
     * @remarks
     * applied tax amount to be returned. The taxes must reference a top-level tax ID from the source
     * order.
     */
    returnTaxes?: OrderReturnTax[];
    /**
     * A rounding adjustment of the money being returned. Commonly used to apply cash rounding
     *
     * @remarks
     * when the minimum unit of the account is smaller than the lowest physical denomination of the currency.
     */
    roundingAdjustment?: OrderRoundingAdjustment;
    /**
     * An order that contains the original sale of these return line items. This is unset
     *
     * @remarks
     * for unlinked returns.
     */
    sourceOrderId?: string;
    /**
     * A unique ID that identifies the return only within this order.
     */
    uid?: string;
}
