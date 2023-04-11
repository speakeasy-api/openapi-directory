import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateIndividualScreeningRequestSearchTerms } from "./updateindividualscreeningrequestsearchterms";
import { WatchlistScreeningIndividualUpdateRequestResettableFieldEnum } from "./watchlistscreeningindividualupdaterequestresettablefieldenum";
import { WatchlistScreeningStatusEnum } from "./watchlistscreeningstatusenum";
/**
 * Request input for editing an individual watchlist screening
 */
export declare class WatchlistScreeningIndividualUpdateRequest extends SpeakeasyBase {
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
     * A list of fields to reset back to null
     */
    resetFields?: WatchlistScreeningIndividualUpdateRequestResettableFieldEnum[];
    /**
     * Search terms for editing an individual watchlist screening
     */
    searchTerms?: UpdateIndividualScreeningRequestSearchTerms;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.
     */
    status?: WatchlistScreeningStatusEnum;
    /**
     * ID of the associated screening.
     */
    watchlistScreeningId: string;
}
