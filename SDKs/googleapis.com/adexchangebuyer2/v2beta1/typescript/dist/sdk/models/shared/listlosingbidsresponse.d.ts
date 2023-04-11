import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeStatusRow } from "./creativestatusrow";
/**
 * Response message for listing all reasons that bids lost in the auction.
 */
export declare class ListLosingBidsResponse extends SpeakeasyBase {
    /**
     * List of rows, with counts of losing bids aggregated by loss reason (for example, creative status).
     */
    creativeStatusRows?: CreativeStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListLosingBidsRequest.pageToken field in the subsequent call to the losingBids.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
