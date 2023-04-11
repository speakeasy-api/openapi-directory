import { SpeakeasyBase } from "../../../internal/utils";
import { OrderSummary } from "./ordersummary";
import { Pagination } from "./pagination";
/**
 * Request was successful
 */
export declare class OrderList extends SpeakeasyBase {
    /**
     * A collection of orders
     */
    orders: OrderSummary[];
    pagination: Pagination;
}
