import { SpeakeasyBase } from "../../../internal/utils";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
/**
 * A shipment item
**/
export declare class ShipmentItem extends SpeakeasyBase {
    asin?: string;
    externalOrderId?: string;
    externalOrderItemId?: string;
    name?: string;
    orderSourceCode?: OrderSourceNameEnum;
    quantity?: number;
    salesOrderId?: string;
    salesOrderItemId?: string;
    sku?: string;
}
