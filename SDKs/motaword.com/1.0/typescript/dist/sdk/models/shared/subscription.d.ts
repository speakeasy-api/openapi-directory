import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Delete continuous project subscription
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * Stripe downgradable plan
     */
    downgrade?: string[];
    /**
     * Stripe subscription plan payment card internal id
     */
    paymentMethod?: number;
    /**
     * Stripe plan period end
     */
    periodEnd?: Date;
    /**
     * Stripe subscription plan id
     */
    planId?: string;
    /**
     * Stripe subscription plan name
     */
    planName?: string;
    /**
     * Stripe plan price
     */
    price?: string;
    products?: any[];
    /**
     * Stripe Scheduled plan period end
     */
    scheduleName?: string;
    /**
     * Stripe Scheduled start date
     */
    scheduleStart?: Date;
    /**
     * Stripe subscription id for this project
     */
    subscriptionId?: string;
    /**
     * Stripe upgradable plan
     */
    upgrade?: string[];
    /**
     * Stripe plan trial
     */
    withTrial?: any;
}
