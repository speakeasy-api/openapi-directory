import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutStatusRow } from "./calloutstatusrow";
/**
 * Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
 */
export declare class ListFilteredBidRequestsResponse extends SpeakeasyBase {
    /**
     * List of rows, with counts of filtered bid requests aggregated by callout status.
     */
    calloutStatusRows?: CalloutStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListFilteredBidRequestsRequest.pageToken field in the subsequent call to the filteredBidRequests.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
