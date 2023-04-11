import { SpeakeasyBase } from "../../../internal/utils";
import { FilteredBidCreativeRow } from "./filteredbidcreativerow";
/**
 * Response message for listing all creatives associated with a given filtered bid reason.
 */
export declare class ListCreativeStatusBreakdownByCreativeResponse extends SpeakeasyBase {
    /**
     * List of rows, with counts of bids with a given creative status aggregated by creative.
     */
    filteredBidCreativeRows?: FilteredBidCreativeRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the subsequent call to the filteredBids.creatives.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
