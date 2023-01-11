package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput
 * Describes the spec for one promotion.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeTrialDuration")
    public GoogleCloudPaymentsResellerSubscriptionV1Duration freeTrialDuration;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput withFreeTrialDuration(GoogleCloudPaymentsResellerSubscriptionV1Duration freeTrialDuration) {
        this.freeTrialDuration = freeTrialDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPricingDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput introductoryPricingDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput withIntroductoryPricingDetails(GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput introductoryPricingDetails) {
        this.introductoryPricingDetails = introductoryPricingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotion")
    public String promotion;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput withPromotion(String promotion) {
        this.promotion = promotion;
        return this;
    }
}