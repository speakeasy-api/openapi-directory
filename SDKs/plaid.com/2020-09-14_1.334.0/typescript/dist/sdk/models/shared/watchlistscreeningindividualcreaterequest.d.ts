import { SpeakeasyBase } from "../../../internal/utils";
import { WatchlistScreeningRequestSearchTerms } from "./watchlistscreeningrequestsearchterms";
/**
 * Request input for creating an individual watchlist screening
 */
export declare class WatchlistScreeningIndividualCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An identifier to help you connect this object to your internal systems. For example, your database ID corresponding to this object.
     */
    clientUserId?: string;
    /**
     * Search inputs for creating a watchlist screening
     */
    searchTerms: WatchlistScreeningRequestSearchTerms;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
