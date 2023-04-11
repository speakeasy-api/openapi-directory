import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes changes to subscription and billing states.
 */
export declare class SubscriptionEvent extends SpeakeasyBase {
    /**
     * The date, in YYYY-MM-DD format (for
     *
     * @remarks
     * example, 2013-01-15), when the subscription event went into effect.
     */
    effectiveDate: string;
    /**
     * The ID of the subscription event.
     */
    id: string;
    info?: any;
    /**
     * The ID of the subscription plan associated with the subscription.
     */
    planId: string;
    /**
     * Type of the subscription event.
     */
    subscriptionEventType: string;
}
