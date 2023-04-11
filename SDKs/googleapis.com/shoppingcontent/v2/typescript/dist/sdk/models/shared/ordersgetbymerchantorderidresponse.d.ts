import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * Successful response
 */
export declare class OrdersGetByMerchantOrderIdResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse".
     */
    kind?: string;
    /**
     * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
     */
    order?: Order;
}
