package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1Promotion
 * A Promotion resource that defines a promotion for a subscription that can be resold.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1Promotion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicableProducts")
    public String[] applicableProducts;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withApplicableProducts(String[] applicableProducts) {
        this.applicableProducts = applicableProducts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeTrialDuration")
    public GoogleCloudPaymentsResellerSubscriptionV1Duration freeTrialDuration;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withFreeTrialDuration(GoogleCloudPaymentsResellerSubscriptionV1Duration freeTrialDuration) {
        this.freeTrialDuration = freeTrialDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPricingDetails")
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails introductoryPricingDetails;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withIntroductoryPricingDetails(GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails introductoryPricingDetails) {
        this.introductoryPricingDetails = introductoryPricingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionType")
    public GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum promotionType;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withPromotionType(GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum promotionType) {
        this.promotionType = promotionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCodes")
    public String[] regionCodes;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withRegionCodes(String[] regionCodes) {
        this.regionCodes = regionCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("titles")
    public GoogleTypeLocalizedText[] titles;
    public GoogleCloudPaymentsResellerSubscriptionV1Promotion withTitles(GoogleTypeLocalizedText[] titles) {
        this.titles = titles;
        return this;
    }
}