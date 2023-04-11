import { SpeakeasyBase } from "../../../internal/utils";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
/**
 * A shipment item
 */
export declare class ShipmentItem extends SpeakeasyBase {
    /**
     * Amazon Standard Identification Number
     */
    asin?: string;
    /**
     * external order id
     */
    externalOrderId?: string;
    /**
     * external order item id
     */
    externalOrderItemId?: string;
    /**
     * item name
     */
    name?: string;
    orderSourceCode?: OrderSourceNameEnum;
    /**
     * The quantity of this item included in the shipment
     */
    quantity?: number;
    /**
     * sales order id
     */
    salesOrderId?: string;
    /**
     * sales order item id
     */
    salesOrderItemId?: string;
    /**
     * Item Stock Keeping Unit
     */
    sku?: string;
}
