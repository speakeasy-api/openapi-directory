import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Subscription } from "./subscription";
/**
 * Defines parameters in a
 *
 * @remarks
 * [ResumeSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/resume-subscription) endpoint
 * response.
 */
export declare class ResumeSubscriptionResponse extends SpeakeasyBase {
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
