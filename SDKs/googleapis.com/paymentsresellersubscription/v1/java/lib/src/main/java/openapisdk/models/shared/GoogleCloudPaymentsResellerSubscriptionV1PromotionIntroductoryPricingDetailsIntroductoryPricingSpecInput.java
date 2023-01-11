package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput
 * The duration of an introductory pricing promotion.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountAmount")
    public GoogleCloudPaymentsResellerSubscriptionV1Amount discountAmount;
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput withDiscountAmount(GoogleCloudPaymentsResellerSubscriptionV1Amount discountAmount) {
        this.discountAmount = discountAmount;
        return this;
    }
}