package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails
 * The details of a introductory pricing promotion.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPricingSpecs")
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec[] introductoryPricingSpecs;
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails withIntroductoryPricingSpecs(GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec[] introductoryPricingSpecs) {
        this.introductoryPricingSpecs = introductoryPricingSpecs;
        return this;
    }
}