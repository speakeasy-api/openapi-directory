import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The financial commitment the customer has in the product
 */
export declare enum SubscriptionBillingCommitmentEnum {
    Paid = "PAID",
    Free = "FREE",
    Trial = "TRIAL"
}
export declare enum SubscriptionBillingPastDueTypesEnum {
    Addon = "ADDON",
    Burst = "BURST",
    Subscription = "SUBSCRIPTION"
}
/**
 * Whether payments are past due
 */
export declare enum SubscriptionBillingStatusEnum {
    Current = "CURRENT",
    PastDue = "PAST_DUE"
}
export declare class SubscriptionBilling extends SpeakeasyBase {
    /**
     * The financial commitment the customer has in the product
     */
    commitment: SubscriptionBillingCommitmentEnum;
    /**
     * The types of charges that are past due when `status` is PAST_DUE
     */
    pastDueTypes?: SubscriptionBillingPastDueTypesEnum[];
    /**
     * The point in time after which the Subscription will bill for automatic renewal
     */
    renewAt: string;
    /**
     * Whether payments are past due
     */
    status: SubscriptionBillingStatusEnum;
}
