import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Location } from "./googlecloudpaymentsresellersubscriptionv1location";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptioncancellationdetails";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem, GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitem";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec, GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionupgradedowngradedetails";
/**
 * Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED",
    ProcessingStateCancelling = "PROCESSING_STATE_CANCELLING",
    ProcessingStateRecurring = "PROCESSING_STATE_RECURRING"
}
/**
 * Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateCreated = "STATE_CREATED",
    StateActive = "STATE_ACTIVE",
    StateCancelled = "STATE_CANCELLED",
    StateInGracePeriod = "STATE_IN_GRACE_PERIOD",
    StateCancelAtEndOfCycle = "STATE_CANCEL_AT_END_OF_CYCLE",
    StateSuspended = "STATE_SUSPENDED"
}
/**
 * A Subscription resource managed by 3P Partners.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1Subscription extends SpeakeasyBase {
    /**
     * Describes the details of a cancelled or cancelling subscription.
     */
    cancellationDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
    /**
     * Output only. System generated timestamp when the subscription is created. UTC timezone.
     */
    createTime?: string;
    /**
     * Output only. The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. For example: "2019-08-31T17:28:54.564Z"
     */
    cycleEndTime?: string;
    /**
     * Output only. Indicates if the subscription is entitled to the end user.
     */
    endUserEntitled?: boolean;
    /**
     * Output only. End of the free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified.
     */
    freeTrialEndTime?: string;
    /**
     * Required. The line items of the subscription.
     */
    lineItems?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem[];
    /**
     * Optional. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only.
     */
    name?: string;
    /**
     * Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum.
     */
    partnerUserToken?: string;
    /**
     * Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).
     */
    processingState?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingStateEnum;
    /**
     * Required. Deprecated: consider using `line_items` as the input. Required. Resource name that identifies the purchased products. The format will be 'partners/{partner_id}/products/{product_id}'.
     */
    products?: string[];
    /**
     * Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input.
     */
    promotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[];
    /**
     * Optional. Deprecated: consider using the top-level `promotion_specs` as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id}/promotions/{promotion_id}'.
     */
    promotions?: string[];
    /**
     * Output only. The place where partners should redirect the end-user to after creation. This field might also be populated when creation failed. However, Partners should always prepare a default URL to redirect the user in case this field is empty.
     */
    redirectUri?: string;
    /**
     * Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z"
     */
    renewalTime?: string;
    /**
     * Describes a location of an end user.
     */
    serviceLocation?: GoogleCloudPaymentsResellerSubscriptionV1Location;
    /**
     * Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).
     */
    state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionStateEnum;
    /**
     * Output only. System generated timestamp when the subscription is most recently updated. UTC timezone.
     */
    updateTime?: string;
    /**
     * Details about the previous subscription that this new subscription upgrades/downgrades from.
     */
    upgradeDowngradeDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
}
/**
 * A Subscription resource managed by 3P Partners.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput extends SpeakeasyBase {
    /**
     * Describes the details of a cancelled or cancelling subscription.
     */
    cancellationDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
    /**
     * Required. The line items of the subscription.
     */
    lineItems?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput[];
    /**
     * Optional. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only.
     */
    name?: string;
    /**
     * Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum.
     */
    partnerUserToken?: string;
    /**
     * Required. Deprecated: consider using `line_items` as the input. Required. Resource name that identifies the purchased products. The format will be 'partners/{partner_id}/products/{product_id}'.
     */
    products?: string[];
    /**
     * Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input.
     */
    promotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[];
    /**
     * Optional. Deprecated: consider using the top-level `promotion_specs` as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id}/promotions/{promotion_id}'.
     */
    promotions?: string[];
    /**
     * Describes a location of an end user.
     */
    serviceLocation?: GoogleCloudPaymentsResellerSubscriptionV1Location;
    /**
     * Details about the previous subscription that this new subscription upgrades/downgrades from.
     */
    upgradeDowngradeDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
}
