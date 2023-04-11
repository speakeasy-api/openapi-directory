import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * Order List Response
 */
export declare class OrdersListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Order collection.
     */
    orders?: Order[];
}
