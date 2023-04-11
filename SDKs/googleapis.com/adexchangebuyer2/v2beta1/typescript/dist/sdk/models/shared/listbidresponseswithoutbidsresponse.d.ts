import { SpeakeasyBase } from "../../../internal/utils";
import { BidResponseWithoutBidsStatusRow } from "./bidresponsewithoutbidsstatusrow";
/**
 * Response message for listing all reasons that bid responses were considered to have no applicable bids.
 */
export declare class ListBidResponsesWithoutBidsResponse extends SpeakeasyBase {
    /**
     * List of rows, with counts of bid responses without bids aggregated by status.
     */
    bidResponseWithoutBidsStatusRows?: BidResponseWithoutBidsStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call to the bidResponsesWithoutBids.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
