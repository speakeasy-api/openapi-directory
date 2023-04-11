import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateEntityScreeningRequestSearchTerms } from "./updateentityscreeningrequestsearchterms";
import { WatchlistScreeningEntityUpdateRequestResettableFieldEnum } from "./watchlistscreeningentityupdaterequestresettablefieldenum";
import { WatchlistScreeningStatusEnum } from "./watchlistscreeningstatusenum";
/**
 * Request input for editing an entity watchlist screening
 */
export declare class WatchlistScreeningEntityUpdateRequest extends SpeakeasyBase {
    /**
     * ID of the associated user.
     */
    assignee?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An identifier to help you connect this object to your internal systems. For example, your database ID corresponding to this object.
     */
    clientUserId?: string;
    /**
     * ID of the associated entity screening.
     */
    entityWatchlistScreeningId: string;
    /**
     * A list of fields to reset back to null
     */
    resetFields?: WatchlistScreeningEntityUpdateRequestResettableFieldEnum[];
    /**
     * Search terms for editing an entity watchlist screening
     */
    searchTerms?: UpdateEntityScreeningRequestSearchTerms;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.
     */
    status?: WatchlistScreeningStatusEnum;
}
