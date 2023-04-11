import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Amount } from "./googlecloudpaymentsresellersubscriptionv1amount";
import { GoogleCloudPaymentsResellerSubscriptionV1ProductPayload } from "./googlecloudpaymentsresellersubscriptionv1productpayload";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec, GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput } from "./googlecloudpaymentsresellersubscriptionv1subscriptionpromotionspec";
/**
 * Output only. The recurrence type of the line item.
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum {
    LineItemRecurrenceTypeUnspecified = "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED",
    LineItemRecurrenceTypePeriodic = "LINE_ITEM_RECURRENCE_TYPE_PERIODIC",
    LineItemRecurrenceTypeOneTime = "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME"
}
/**
 * Output only. The state of the line item.
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum {
    LineItemStateUnspecified = "LINE_ITEM_STATE_UNSPECIFIED",
    LineItemStateActive = "LINE_ITEM_STATE_ACTIVE",
    LineItemStateInactive = "LINE_ITEM_STATE_INACTIVE",
    LineItemStateNew = "LINE_ITEM_STATE_NEW",
    LineItemStateActivating = "LINE_ITEM_STATE_ACTIVATING",
    LineItemStateDeactivating = "LINE_ITEM_STATE_DEACTIVATING",
    LineItemStateWaitingToDeactivate = "LINE_ITEM_STATE_WAITING_TO_DEACTIVATE"
}
/**
 * Individual line item definition of a subscription.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem extends SpeakeasyBase {
    /**
     * Describes the amount unit including the currency code.
     */
    amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;
    /**
     * Output only. Description of this line item.
     */
    description?: string;
    /**
     * Output only. The free trial end time will be populated after the line item is successfully processed. End time of the line item free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified.
     */
    lineItemFreeTrialEndTime?: string;
    /**
     * Optional. The promotions applied on the line item. It can be: - a free trial promotion, which overrides the subscription-level free trial promotion. - an introductory pricing promotion. When used as input in Create or Provision API, specify its resource name only.
     */
    lineItemPromotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[];
    /**
     * Details for a ONE_TIME recurrence line item.
     */
    oneTimeRecurrenceDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;
    /**
     * Required. Product resource name that identifies one the line item The format is 'partners/{partner_id}/products/{product_id}'.
     */
    product?: string;
    /**
     * Specifies product specific payload.
     */
    productPayload?: GoogleCloudPaymentsResellerSubscriptionV1ProductPayload;
    /**
     * Output only. The recurrence type of the line item.
     */
    recurrenceType?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum;
    /**
     * Output only. The state of the line item.
     */
    state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum;
}
/**
 * Individual line item definition of a subscription.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput extends SpeakeasyBase {
    /**
     * Describes the amount unit including the currency code.
     */
    amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;
    /**
     * Optional. The promotions applied on the line item. It can be: - a free trial promotion, which overrides the subscription-level free trial promotion. - an introductory pricing promotion. When used as input in Create or Provision API, specify its resource name only.
     */
    lineItemPromotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[];
    /**
     * Details for a ONE_TIME recurrence line item.
     */
    oneTimeRecurrenceDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;
    /**
     * Required. Product resource name that identifies one the line item The format is 'partners/{partner_id}/products/{product_id}'.
     */
    product?: string;
    /**
     * Specifies product specific payload.
     */
    productPayload?: GoogleCloudPaymentsResellerSubscriptionV1ProductPayload;
}
