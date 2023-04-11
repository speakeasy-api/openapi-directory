import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { SubscriptionEvent } from "./subscriptionevent";
/**
 * Defines the fields that are included in the response from the
 *
 * @remarks
 * [ListSubscriptionEvents](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/list-subscription-events)
 * endpoint.
 */
export declare class ListSubscriptionEventsResponse extends SpeakeasyBase {
    /**
     * When a response is truncated, it includes a cursor that you can
     *
     * @remarks
     * use in a subsequent request to fetch the next set of events.
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
     * The `SubscriptionEvents` retrieved.
     */
    subscriptionEvents?: SubscriptionEvent[];
}
