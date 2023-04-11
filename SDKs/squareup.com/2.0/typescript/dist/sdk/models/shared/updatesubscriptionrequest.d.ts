import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * Defines parameters in a
 *
 * @remarks
 * [UpdateSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/update-subscription) endpoint
 * request.
 */
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    /**
     * Represents a customer subscription to a subscription plan.
     *
     * @remarks
     * For an overview of the `Subscription` type, see
     * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
     */
    subscription?: Subscription;
}
