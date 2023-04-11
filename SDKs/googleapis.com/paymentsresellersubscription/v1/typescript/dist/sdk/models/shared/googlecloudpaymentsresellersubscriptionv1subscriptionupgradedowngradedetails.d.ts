import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription.
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum {
    BillingCycleSpecUnspecified = "BILLING_CYCLE_SPEC_UNSPECIFIED",
    BillingCycleSpecAlignWithPreviousSubscription = "BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION",
    BillingCycleSpecStartImmediately = "BILLING_CYCLE_SPEC_START_IMMEDIATELY"
}
/**
 * Details about the previous subscription that this new subscription upgrades/downgrades from.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails extends SpeakeasyBase {
    /**
     * Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription.
     */
    billingCycleSpec?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum;
    /**
     * Required. The previous subscription id to be replaced. This is not the full resource name, use the subscription_id segment only.
     */
    previousSubscriptionId?: string;
}
