import { SpeakeasyBase } from "../../../internal/utils";
import { CanceledStateContext } from "./canceledstatecontext";
import { ExternalAccountIdentifiers } from "./externalaccountidentifiers";
import { PausedStateContext } from "./pausedstatecontext";
import { SubscribeWithGoogleInfo } from "./subscribewithgoogleinfo";
import { SubscriptionPurchaseLineItem } from "./subscriptionpurchaselineitem";
/**
 * The acknowledgement state of the subscription.
 */
export declare enum SubscriptionPurchaseV2AcknowledgementStateEnum {
    AcknowledgementStateUnspecified = "ACKNOWLEDGEMENT_STATE_UNSPECIFIED",
    AcknowledgementStatePending = "ACKNOWLEDGEMENT_STATE_PENDING",
    AcknowledgementStateAcknowledged = "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED"
}
/**
 * The current state of the subscription.
 */
export declare enum SubscriptionPurchaseV2SubscriptionStateEnum {
    SubscriptionStateUnspecified = "SUBSCRIPTION_STATE_UNSPECIFIED",
    SubscriptionStatePending = "SUBSCRIPTION_STATE_PENDING",
    SubscriptionStateActive = "SUBSCRIPTION_STATE_ACTIVE",
    SubscriptionStatePaused = "SUBSCRIPTION_STATE_PAUSED",
    SubscriptionStateInGracePeriod = "SUBSCRIPTION_STATE_IN_GRACE_PERIOD",
    SubscriptionStateOnHold = "SUBSCRIPTION_STATE_ON_HOLD",
    SubscriptionStateCanceled = "SUBSCRIPTION_STATE_CANCELED",
    SubscriptionStateExpired = "SUBSCRIPTION_STATE_EXPIRED"
}
/**
 * Indicates the status of a user's subscription purchase.
 */
export declare class SubscriptionPurchaseV2 extends SpeakeasyBase {
    /**
     * The acknowledgement state of the subscription.
     */
    acknowledgementState?: SubscriptionPurchaseV2AcknowledgementStateEnum;
    /**
     * Information specific to a subscription in canceled state.
     */
    canceledStateContext?: CanceledStateContext;
    /**
     * User account identifier in the third-party service.
     */
    externalAccountIdentifiers?: ExternalAccountIdentifiers;
    /**
     * This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service.
     */
    kind?: string;
    /**
     * The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token.
     */
    latestOrderId?: string;
    /**
     * Item-level info for a subscription purchase. The items in the same purchase should be either all with AutoRenewingPlan or all with PrepaidPlan.
     */
    lineItems?: SubscriptionPurchaseLineItem[];
    /**
     * The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription.
     */
    linkedPurchaseToken?: string;
    /**
     * Information specific to a subscription in paused state.
     */
    pausedStateContext?: PausedStateContext;
    /**
     * ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
     */
    regionCode?: string;
    /**
     * Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup).
     */
    startTime?: string;
    /**
     * Information associated with purchases made with 'Subscribe with Google'.
     */
    subscribeWithGoogleInfo?: SubscribeWithGoogleInfo;
    /**
     * The current state of the subscription.
     */
    subscriptionState?: SubscriptionPurchaseV2SubscriptionStateEnum;
    /**
     * Whether this subscription purchase is a test purchase.
     */
    testPurchase?: Record<string, any>;
}
