import { SpeakeasyBase } from "../../../internal/utils";
import { LineItem } from "./lineitem";
/**
 * Successful response
 */
export declare class ListLineItemsResponse extends SpeakeasyBase {
    /**
     * The list of line items. This list will be absent if empty.
     */
    lineItems?: LineItem[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLineItems` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
