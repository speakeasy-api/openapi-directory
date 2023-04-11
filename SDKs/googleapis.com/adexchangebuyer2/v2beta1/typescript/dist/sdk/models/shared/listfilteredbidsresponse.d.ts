import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeStatusRow } from "./creativestatusrow";
/**
 * Response message for listing all reasons that bids were filtered from the auction.
 */
export declare class ListFilteredBidsResponse extends SpeakeasyBase {
    /**
     * List of rows, with counts of filtered bids aggregated by filtering reason (for example, creative status).
     */
    creativeStatusRows?: CreativeStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListFilteredBidsRequest.pageToken field in the subsequent call to the filteredBids.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
