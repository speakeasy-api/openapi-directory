import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Subscription } from "./subscription";
/**
 * Defines fields that are included in a
 *
 * @remarks
 * [CancelSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/cancel-subscription) response.
 */
export declare class CancelSubscriptionResponse extends SpeakeasyBase {
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a customer subscription to a subscription plan.
     *
     * @remarks
     * For an overview of the `Subscription` type, see
     * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
     */
    subscription?: Subscription;
}
