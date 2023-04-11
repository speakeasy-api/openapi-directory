import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * Successful response
 */
export declare class OrdersListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of orders.
     */
    nextPageToken?: string;
    resources?: Order[];
}
