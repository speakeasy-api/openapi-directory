package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NativeContent
 * Native content for a creative.
**/
public class NativeContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserName")
    public String advertiserName;
    public NativeContent withAdvertiserName(String advertiserName) {
        this.advertiserName = advertiserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIcon")
    public Image appIcon;
    public NativeContent withAppIcon(Image appIcon) {
        this.appIcon = appIcon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public NativeContent withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callToAction")
    public String callToAction;
    public NativeContent withCallToAction(String callToAction) {
        this.callToAction = callToAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickLinkUrl")
    public String clickLinkUrl;
    public NativeContent withClickLinkUrl(String clickLinkUrl) {
        this.clickLinkUrl = clickLinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickTrackingUrl")
    public String clickTrackingUrl;
    public NativeContent withClickTrackingUrl(String clickTrackingUrl) {
        this.clickTrackingUrl = clickTrackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline")
    public String headline;
    public NativeContent withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public NativeContent withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public Image logo;
    public NativeContent withLogo(Image logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceDisplayText")
    public String priceDisplayText;
    public NativeContent withPriceDisplayText(String priceDisplayText) {
        this.priceDisplayText = priceDisplayText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starRating")
    public Double starRating;
    public NativeContent withStarRating(Double starRating) {
        this.starRating = starRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeUrl")
    public String storeUrl;
    public NativeContent withStoreUrl(String storeUrl) {
        this.storeUrl = storeUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoUrl")
    public String videoUrl;
    public NativeContent withVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
        return this;
    }
}