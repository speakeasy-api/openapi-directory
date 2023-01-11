package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec
 * Describes the spec for one promotion.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeTrialDuration")
    public GoogleCloudPaymentsResellerSubscriptionV1Duration freeTrialDuration;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec withFreeTrialDuration(GoogleCloudPaymentsResellerSubscriptionV1Duration freeTrialDuration) {
        this.freeTrialDuration = freeTrialDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPricingDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails introductoryPricingDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec withIntroductoryPricingDetails(GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails introductoryPricingDetails) {
        this.introductoryPricingDetails = introductoryPricingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotion")
    public String promotion;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec withPromotion(String promotion) {
        this.promotion = promotion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum type;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec withType(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum type) {
        this.type = type;
        return this;
    }
}