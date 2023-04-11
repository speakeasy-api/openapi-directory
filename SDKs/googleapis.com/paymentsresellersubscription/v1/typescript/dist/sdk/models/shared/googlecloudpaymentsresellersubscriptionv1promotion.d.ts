import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";
/**
 * Output only. Output Only. Specifies the type of the promotion.
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum {
    PromotionTypeUnspecified = "PROMOTION_TYPE_UNSPECIFIED",
    PromotionTypeFreeTrial = "PROMOTION_TYPE_FREE_TRIAL",
    PromotionTypeIntroductoryPricing = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
}
/**
 * A Promotion resource that defines a promotion for a subscription that can be resold.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1Promotion extends SpeakeasyBase {
    /**
     * Output only. The product ids this promotion can be applied to.
     */
    applicableProducts?: string[];
    /**
     * Optional. Specifies the end time (exclusive) of the period that the promotion is available in. If unset, the promotion is available indefinitely.
     */
    endTime?: string;
    /**
     * Describes the length of a period of a time.
     */
    freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    /**
     * The details of a introductory pricing promotion.
     */
    introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;
    /**
     * Output only. Response only. Resource name of the subscription promotion. It will have the format of "partners/{partner_id}/promotion/{promotion_id}"
     */
    name?: string;
    /**
     * Output only. Output Only. Specifies the type of the promotion.
     */
    promotionType?: GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum;
    /**
     * Output only. 2-letter ISO region code where the promotion is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1
     */
    regionCodes?: string[];
    /**
     * Optional. Specifies the start time (inclusive) of the period that the promotion is available in.
     */
    startTime?: string;
    /**
     * Output only. Localized human readable name of the promotion.
     */
    titles?: GoogleTypeLocalizedText[];
}
