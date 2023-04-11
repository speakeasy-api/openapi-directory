import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrdersUpdateMerchantOrderIdRequest extends SpeakeasyBase {
    /**
     * The merchant order id to be assigned to the order. Must be unique per merchant.
     */
    merchantOrderId?: string;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
}
