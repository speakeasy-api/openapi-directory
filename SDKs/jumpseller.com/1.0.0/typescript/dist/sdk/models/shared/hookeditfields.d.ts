import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event associated with Hook
 */
export declare enum HookEditFieldsEventEnum {
    OrderUpdated = "order_updated",
    OrderPendingPayment = "order_pending_payment",
    OrderPaid = "order_paid",
    OrderShipped = "order_shipped",
    OrderCanceled = "order_canceled",
    OrderAbandoned = "order_abandoned",
    ProductCreated = "product_created",
    ProductUpdated = "product_updated",
    ProductDeleted = "product_deleted",
    CustomerCreated = "customer_created",
    CustomerUpdated = "customer_updated",
    CustomerDeleted = "customer_deleted"
}
export declare class HookEditFields extends SpeakeasyBase {
    /**
     * Event associated with Hook
     */
    event: HookEditFieldsEventEnum;
    /**
     * Hook URL to be notified
     */
    url: string;
}
