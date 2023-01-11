package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeNativeAd
 * If nativeAd is set, HTMLSnippet and videoURL should not be set.
**/
public class CreativeNativeAd {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiser")
    public String advertiser;
    public CreativeNativeAd withAdvertiser(String advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIcon")
    public CreativeNativeAdAppIcon appIcon;
    public CreativeNativeAd withAppIcon(CreativeNativeAdAppIcon appIcon) {
        this.appIcon = appIcon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public CreativeNativeAd withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callToAction")
    public String callToAction;
    public CreativeNativeAd withCallToAction(String callToAction) {
        this.callToAction = callToAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickTrackingUrl")
    public String clickTrackingUrl;
    public CreativeNativeAd withClickTrackingUrl(String clickTrackingUrl) {
        this.clickTrackingUrl = clickTrackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline")
    public String headline;
    public CreativeNativeAd withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public CreativeNativeAdImage image;
    public CreativeNativeAd withImage(CreativeNativeAdImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionTrackingUrl")
    public String[] impressionTrackingUrl;
    public CreativeNativeAd withImpressionTrackingUrl(String[] impressionTrackingUrl) {
        this.impressionTrackingUrl = impressionTrackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public CreativeNativeAdLogo logo;
    public CreativeNativeAd withLogo(CreativeNativeAdLogo logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public String price;
    public CreativeNativeAd withPrice(String price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starRating")
    public Double starRating;
    public CreativeNativeAd withStarRating(Double starRating) {
        this.starRating = starRating;
        return this;
    }
}