import { SpeakeasyBase } from "../../../internal/utils";
import { GuaranteedOrder } from "./guaranteedorder";
/**
 * Successful response
 */
export declare class ListGuaranteedOrdersResponse extends SpeakeasyBase {
    /**
     * The list of guaranteed orders. This list will be absent if empty.
     */
    guaranteedOrders?: GuaranteedOrder[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGuaranteedOrders` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
