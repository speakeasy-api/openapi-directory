import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE.
 */
export declare enum AutoRenewingBasePlanTypeProrationModeEnum {
    SubscriptionProrationModeUnspecified = "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
    SubscriptionProrationModeChargeOnNextBillingDate = "SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE",
    SubscriptionProrationModeChargeFullPriceImmediately = "SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY"
}
/**
 * Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified.
 */
export declare enum AutoRenewingBasePlanTypeResubscribeStateEnum {
    ResubscribeStateUnspecified = "RESUBSCRIBE_STATE_UNSPECIFIED",
    ResubscribeStateActive = "RESUBSCRIBE_STATE_ACTIVE",
    ResubscribeStateInactive = "RESUBSCRIBE_STATE_INACTIVE"
}
/**
 * Represents a base plan that automatically renews at the end of its subscription period.
 */
export declare class AutoRenewingBasePlanType extends SpeakeasyBase {
    /**
     * Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.
     */
    billingPeriodDuration?: string;
    /**
     * Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration.
     */
    gracePeriodDuration?: string;
    /**
     * Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription.
     */
    legacyCompatible?: boolean;
    /**
     * Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string.
     */
    legacyCompatibleSubscriptionOfferId?: string;
    /**
     * The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE.
     */
    prorationMode?: AutoRenewingBasePlanTypeProrationModeEnum;
    /**
     * Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified.
     */
    resubscribeState?: AutoRenewingBasePlanTypeResubscribeStateEnum;
}
