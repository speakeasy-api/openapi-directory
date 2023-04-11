import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Describes a phase in a subscription plan. For more information, see
 *
 * @remarks
 * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
 */
export declare class SubscriptionPhase extends SpeakeasyBase {
    /**
     * The billing cadence of the phase. For example, weekly or monthly. This field cannot be changed after a `SubscriptionPhase` is created.
     */
    cadence: string;
    /**
     * The position this phase appears in the sequence of phases defined for the plan, indexed from 0. This field cannot be changed after a `SubscriptionPhase` is created.
     */
    ordinal?: number;
    /**
     * The number of `cadence`s the phase lasts. If not set, the phase never ends. Only the last phase can be indefinite. This field cannot be changed after a `SubscriptionPhase` is created.
     */
    periods?: number;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    recurringPriceMoney: Money;
    /**
     * The Square-assigned ID of the subscription phase. This field cannot be changed after a `SubscriptionPhase` is created.
     */
    uid?: string;
}
