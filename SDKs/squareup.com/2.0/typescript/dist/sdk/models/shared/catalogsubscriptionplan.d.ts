import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionPhase } from "./subscriptionphase";
/**
 * Describes a subscription plan. For more information, see
 *
 * @remarks
 * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
 */
export declare class CatalogSubscriptionPlan extends SpeakeasyBase {
    /**
     * The name of the plan.
     */
    name: string;
    /**
     * A list of SubscriptionPhase containing the [SubscriptionPhase](https://developer.squareup.com/reference/square_2021-08-18/objects/SubscriptionPhase) for this plan.
     */
    phases: SubscriptionPhase[];
}
