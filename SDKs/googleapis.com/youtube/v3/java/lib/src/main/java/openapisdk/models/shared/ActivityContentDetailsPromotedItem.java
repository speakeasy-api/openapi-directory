package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsPromotedItem
 * Details about a resource which is being promoted.
**/
public class ActivityContentDetailsPromotedItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adTag")
    public String adTag;
    public ActivityContentDetailsPromotedItem withAdTag(String adTag) {
        this.adTag = adTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickTrackingUrl")
    public String clickTrackingUrl;
    public ActivityContentDetailsPromotedItem withClickTrackingUrl(String clickTrackingUrl) {
        this.clickTrackingUrl = clickTrackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeViewUrl")
    public String creativeViewUrl;
    public ActivityContentDetailsPromotedItem withCreativeViewUrl(String creativeViewUrl) {
        this.creativeViewUrl = creativeViewUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ctaType")
    public ActivityContentDetailsPromotedItemCtaTypeEnum ctaType;
    public ActivityContentDetailsPromotedItem withCtaType(ActivityContentDetailsPromotedItemCtaTypeEnum ctaType) {
        this.ctaType = ctaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customCtaButtonText")
    public String customCtaButtonText;
    public ActivityContentDetailsPromotedItem withCustomCtaButtonText(String customCtaButtonText) {
        this.customCtaButtonText = customCtaButtonText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptionText")
    public String descriptionText;
    public ActivityContentDetailsPromotedItem withDescriptionText(String descriptionText) {
        this.descriptionText = descriptionText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationUrl")
    public String destinationUrl;
    public ActivityContentDetailsPromotedItem withDestinationUrl(String destinationUrl) {
        this.destinationUrl = destinationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forecastingUrl")
    public String[] forecastingUrl;
    public ActivityContentDetailsPromotedItem withForecastingUrl(String[] forecastingUrl) {
        this.forecastingUrl = forecastingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionUrl")
    public String[] impressionUrl;
    public ActivityContentDetailsPromotedItem withImpressionUrl(String[] impressionUrl) {
        this.impressionUrl = impressionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public ActivityContentDetailsPromotedItem withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}