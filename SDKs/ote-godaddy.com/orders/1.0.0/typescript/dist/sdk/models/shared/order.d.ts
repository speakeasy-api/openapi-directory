import { SpeakeasyBase } from "../../../internal/utils";
import { BillTo } from "./billto";
import { LineItem } from "./lineitem";
import { OrderPricing } from "./orderpricing";
import { Payment } from "./payment";
/**
 * Request was successful
 */
export declare class Order extends SpeakeasyBase {
    billTo: BillTo;
    /**
     * Date and time when the current order is created on
     */
    createdAt: string;
    /**
     * Currency in which the order has been placed
     */
    currency: string;
    items: LineItem[];
    /**
     * Unique identifier of current order
     */
    orderId: string;
    /**
     * Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.
     *
     * @remarks
     * The orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders
     */
    parentOrderId?: string;
    payments: Payment[];
    pricing: OrderPricing;
}
