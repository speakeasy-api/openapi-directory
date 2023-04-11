import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Amount } from "./googlecloudpaymentsresellersubscriptionv1amount";
/**
 * The duration of an introductory pricing promotion.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec extends SpeakeasyBase {
    /**
     * Describes the amount unit including the currency code.
     */
    discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;
    /**
     * Output only. The discount percentage in micros. For example, 50,000 represents 5%.
     */
    discountRatioMicros?: string;
    /**
     * Output only. Output Only. The duration of an introductory offer in billing cycles.
     */
    recurrenceCount?: number;
    /**
     * Output only. 2-letter ISO region code where the product is available in. Ex. "US".
     */
    regionCode?: string;
}
/**
 * The duration of an introductory pricing promotion.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput extends SpeakeasyBase {
    /**
     * Describes the amount unit including the currency code.
     */
    discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;
}
