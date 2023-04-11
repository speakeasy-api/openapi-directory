import { SpeakeasyBase } from "../../../internal/utils";
import { NonBillableWinningBidStatusRow } from "./nonbillablewinningbidstatusrow";
/**
 * Response message for listing all reasons for which a buyer was not billed for a winning bid.
 */
export declare class ListNonBillableWinningBidsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to the nonBillableWinningBids.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * List of rows, with counts of bids not billed aggregated by reason.
     */
    nonBillableWinningBidStatusRows?: NonBillableWinningBidStatusRow[];
}
