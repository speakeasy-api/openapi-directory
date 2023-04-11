import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Subscription } from "./subscription";
/**
 * Defines the fields that are included in the response from the
 *
 * @remarks
 * [SearchSubscriptions](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/search-subscriptions) endpoint.
 */
export declare class SearchSubscriptionsResponse extends SpeakeasyBase {
    /**
     * When a response is truncated, it includes a cursor that you can
     *
     * @remarks
     * use in a subsequent request to fetch the next set of subscriptions.
     * If empty, this is the final response.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * The search result.
     */
    subscriptions?: Subscription[];
}
