import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request input for listing hits for an entity watchlist screening
 */
export declare class WatchlistScreeningEntityHitListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An identifier that determines which page of results you receive.
     */
    cursor?: string;
    /**
     * ID of the associated entity screening.
     */
    entityWatchlistScreeningId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
