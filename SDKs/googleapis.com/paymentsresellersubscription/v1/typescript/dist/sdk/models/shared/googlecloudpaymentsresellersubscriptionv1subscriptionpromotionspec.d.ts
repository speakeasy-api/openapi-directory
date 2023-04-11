import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails, GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput } from "./googlecloudpaymentsresellersubscriptionv1promotionintroductorypricingdetails";
/**
 * Output only. The type of the promotion for the spec.
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum {
    PromotionTypeUnspecified = "PROMOTION_TYPE_UNSPECIFIED",
    PromotionTypeFreeTrial = "PROMOTION_TYPE_FREE_TRIAL",
    PromotionTypeIntroductoryPricing = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
}
/**
 * Describes the spec for one promotion.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec extends SpeakeasyBase {
    /**
     * Describes the length of a period of a time.
     */
    freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    /**
     * The details of a introductory pricing promotion.
     */
    introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;
    /**
     * Required. Promotion resource name that identifies a promotion. The format is 'partners/{partner_id}/promotions/{promotion_id}'.
     */
    promotion?: string;
    /**
     * Output only. The type of the promotion for the spec.
     */
    type?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum;
}
/**
 * Describes the spec for one promotion.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput extends SpeakeasyBase {
    /**
     * Describes the length of a period of a time.
     */
    freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    /**
     * The details of a introductory pricing promotion.
     */
    introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput;
    /**
     * Required. Promotion resource name that identifies a promotion. The format is 'partners/{partner_id}/promotions/{promotion_id}'.
     */
    promotion?: string;
}
