import { SpeakeasyBase } from "../../../internal/utils";
import { LoyaltyEventQuery } from "./loyaltyeventquery";
/**
 * A request to search for loyalty events.
 */
export declare class SearchLoyaltyEventsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this to retrieve the next set of results for your original query.
     * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to include in the response.
     *
     * @remarks
     * The last page might contain fewer events.
     * The default is 30 events.
     */
    limit?: number;
    /**
     * Represents a query used to search for loyalty events.
     */
    query?: LoyaltyEventQuery;
}
