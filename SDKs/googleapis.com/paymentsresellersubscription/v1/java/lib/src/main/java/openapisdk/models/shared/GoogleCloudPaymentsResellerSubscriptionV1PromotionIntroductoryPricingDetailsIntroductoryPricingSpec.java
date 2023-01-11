package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec
 * The duration of an introductory pricing promotion.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountAmount")
    public GoogleCloudPaymentsResellerSubscriptionV1Amount discountAmount;
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec withDiscountAmount(GoogleCloudPaymentsResellerSubscriptionV1Amount discountAmount) {
        this.discountAmount = discountAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountRatioMicros")
    public String discountRatioMicros;
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec withDiscountRatioMicros(String discountRatioMicros) {
        this.discountRatioMicros = discountRatioMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrenceCount")
    public Integer recurrenceCount;
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec withRecurrenceCount(Integer recurrenceCount) {
        this.recurrenceCount = recurrenceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}