import { SpeakeasyBase } from "../../../internal/utils";
import { EntityWatchlistSearchTerms } from "./entitywatchlistsearchterms";
/**
 * Request input for creating an entity screening review
 */
export declare class WatchlistScreeningEntityCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An identifier to help you connect this object to your internal systems. For example, your database ID corresponding to this object.
     */
    clientUserId?: string;
    /**
     * Search inputs for creating an entity watchlist screening
     */
    searchTerms: EntityWatchlistSearchTerms;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
