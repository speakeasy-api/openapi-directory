import { SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingAlgorithm } from "./custombiddingalgorithm";
/**
 * Successful response
 */
export declare class ListCustomBiddingAlgorithmsResponse extends SpeakeasyBase {
    /**
     * The list of custom bidding algorithms. This list will be absent if empty.
     */
    customBiddingAlgorithms?: CustomBiddingAlgorithm[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingAlgorithmsRequest` method to retrieve the next page of results. If this field is null, it means this is the last page.
     */
    nextPageToken?: string;
}
