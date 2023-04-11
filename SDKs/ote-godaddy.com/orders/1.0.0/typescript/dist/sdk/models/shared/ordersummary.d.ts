import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemSummary } from "./lineitemsummary";
import { OrderSummaryPricing } from "./ordersummarypricing";
export declare class OrderSummary extends SpeakeasyBase {
    /**
     * Date and time when the current order was created
     */
    createdAt: string;
    /**
     * Currency in which the order was placed
     */
    currency: string;
    /**
     * Sets of two or more line items in current order
     */
    items: LineItemSummary[];
    /**
     * Unique identifier of the current order
     */
    orderId: string;
    /**
     * Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.
     *
     * @remarks
     * The orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders
     */
    parentOrderId?: string;
    pricing: OrderSummaryPricing;
}
