import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current billing period.
 */
export declare class APIBillingPeriodUsageOut extends SpeakeasyBase {
    /**
     * User API Key.
     */
    apiKey?: string;
    /**
     * Current period billing status ex OPEN.
     */
    billingStatus?: string;
    /**
     * Current period hard limit (reaching the limit sends an email notification and blocks the API Key).
     */
    hardLimit?: number;
    /**
     * Datetime when the the plan's current period endend.
     */
    periodEnded?: number;
    /**
     * Datetime when the the plan's current period started.
     */
    periodStarted?: number;
    /**
     * Current period soft limit (reaching the limit sends an email notification).
     */
    softLimit?: number;
    /**
     * Datetime when the the plan's current period endend (in Stripe). Internal and Stripe periodicity should ~coincide.
     */
    stripeCurrentPeriodEnd?: number;
    /**
     * Datetime when the the plan's current period started (in Stripe). Internal and Stripe periodicity should ~coincide.
     */
    stripeCurrentPeriodStart?: number;
    /**
     * Datetime when the user subscribed to the plan.
     */
    subscriptionStarted?: number;
    /**
     * Current period usage in units (NB some API endpoints use more than one unit).
     */
    usage?: number;
}
