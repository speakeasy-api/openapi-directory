package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput
 * The details of a introductory pricing promotion.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPricingSpecs")
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[] introductoryPricingSpecs;
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput withIntroductoryPricingSpecs(GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[] introductoryPricingSpecs) {
        this.introductoryPricingSpecs = introductoryPricingSpecs;
        return this;
    }
}