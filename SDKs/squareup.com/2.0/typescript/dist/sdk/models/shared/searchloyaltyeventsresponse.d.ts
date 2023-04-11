import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyEvent } from "./loyaltyevent";
/**
 * A response that contains loyalty events that satisfy the search
 *
 * @remarks
 * criteria, in order by the `created_at` date.
 */
export declare class SearchLoyaltyEventsResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to be used in a subsequent
     *
     * @remarks
     * request. If empty, this is the final response.
     * For more information,
     * see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The loyalty events that satisfy the search criteria.
     */
    events?: LoyaltyEvent[];
}
