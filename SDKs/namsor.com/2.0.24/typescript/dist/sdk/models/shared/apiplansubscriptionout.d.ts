import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The API Plan governing the subscription.
 */
export declare class APIPlanSubscriptionOut extends SpeakeasyBase {
    /**
     * User API Key.
     */
    apiKey?: string;
    /**
     * Current plan Currency for prices.
     */
    currency?: string;
    /**
     * For USD, GBP, EUR - the factor is 1.
     */
    currencyFactor?: number;
    /**
     * Current plan key (as in Stripe product).
     */
    planBaseFeesKey?: string;
    /**
     * Datetime when the user ended the plan.
     */
    planEnded?: number;
    /**
     * Current plan name.
     */
    planName?: string;
    /**
     * Current plan quota in quantity of units (NB: some API use several units per name).
     */
    planQuota?: number;
    /**
     * Datetime when the user subscribed to the current plan.
     */
    planStarted?: number;
    /**
     * Plan status.
     */
    planStatus?: string;
    /**
     * Current plan price for overages expressed in Currency (extra price per unit above the free quota).
     */
    price?: number;
    /**
     * Current plan price for overages expressed in Currency (extra price per unit above the free quota).
     */
    priceOverage?: number;
    /**
     * Current plan price for overages expressed in USD (extra price per unit above the free quota).
     */
    priceOverageUSD?: number;
    /**
     * Current plan monthly price expressed in USD (includes a free quota).
     */
    priceUSD?: number;
    /**
     * Datetime when the user subscribed to the prior plan.
     */
    priorPlanStarted?: number;
    /**
     * Stripe customer identifier.
     */
    stripeCustomerId?: string;
    /**
     * Stripe status ex active.
     */
    stripeStatus?: string;
    /**
     * Stripe subscription identifier.
     */
    stripeSubscription?: string;
    /**
     * Applicable tax rate for the plan.
     */
    taxRate?: number;
    /**
     * Internal user identifier.
     */
    userId?: string;
}
