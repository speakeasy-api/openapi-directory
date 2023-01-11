package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleVerify
 * Details of DoubleVerify settings.
**/
public class DoubleVerify {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appStarRating")
    public DoubleVerifyAppStarRating appStarRating;
    public DoubleVerify withAppStarRating(DoubleVerifyAppStarRating appStarRating) {
        this.appStarRating = appStarRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidedAgeRatings")
    public DoubleVerifyAvoidedAgeRatingsEnum[] avoidedAgeRatings;
    public DoubleVerify withAvoidedAgeRatings(DoubleVerifyAvoidedAgeRatingsEnum[] avoidedAgeRatings) {
        this.avoidedAgeRatings = avoidedAgeRatings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandSafetyCategories")
    public DoubleVerifyBrandSafetyCategories brandSafetyCategories;
    public DoubleVerify withBrandSafetyCategories(DoubleVerifyBrandSafetyCategories brandSafetyCategories) {
        this.brandSafetyCategories = brandSafetyCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customSegmentId")
    public String customSegmentId;
    public DoubleVerify withCustomSegmentId(String customSegmentId) {
        this.customSegmentId = customSegmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayViewability")
    public DoubleVerifyDisplayViewability displayViewability;
    public DoubleVerify withDisplayViewability(DoubleVerifyDisplayViewability displayViewability) {
        this.displayViewability = displayViewability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fraudInvalidTraffic")
    public DoubleVerifyFraudInvalidTraffic fraudInvalidTraffic;
    public DoubleVerify withFraudInvalidTraffic(DoubleVerifyFraudInvalidTraffic fraudInvalidTraffic) {
        this.fraudInvalidTraffic = fraudInvalidTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoViewability")
    public DoubleVerifyVideoViewability videoViewability;
    public DoubleVerify withVideoViewability(DoubleVerifyVideoViewability videoViewability) {
        this.videoViewability = videoViewability;
        return this;
    }
}