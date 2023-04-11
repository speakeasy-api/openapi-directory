import { SpeakeasyBase } from "../../../internal/utils";
import { InsertionOrder } from "./insertionorder";
/**
 * Successful response
 */
export declare class ListInsertionOrdersResponse extends SpeakeasyBase {
    /**
     * The list of insertion orders. This list will be absent if empty.
     */
    insertionOrders?: InsertionOrder[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInsertionOrders` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
