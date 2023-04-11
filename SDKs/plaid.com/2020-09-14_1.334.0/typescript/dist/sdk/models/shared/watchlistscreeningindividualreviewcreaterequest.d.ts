import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request input for creating a screening review
 */
export declare class WatchlistScreeningIndividualReviewCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * A comment submitted by a team member as part of reviewing a watchlist screening.
     */
    comment?: string;
    /**
     * Hits to mark as a true positive after thorough manual review. These hits will never recur or be updated once dismissed. In most cases, confirmed hits indicate that the customer should be rejected.
     */
    confirmedHits: string[];
    /**
     * Hits to mark as a false positive after thorough manual review. These hits will never recur or be updated once dismissed.
     */
    dismissedHits: string[];
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * ID of the associated screening.
     */
    watchlistScreeningId: string;
}
