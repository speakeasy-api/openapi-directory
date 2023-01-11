package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SeriesSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerImageUrl")
    public String bannerImageUrl;
    public SeriesSeries withBannerImageUrl(String bannerImageUrl) {
        this.bannerImageUrl = bannerImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibleForSubscription")
    public Boolean eligibleForSubscription;
    public SeriesSeries withEligibleForSubscription(Boolean eligibleForSubscription) {
        this.eligibleForSubscription = eligibleForSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public SeriesSeries withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isComplete")
    public Boolean isComplete;
    public SeriesSeries withIsComplete(Boolean isComplete) {
        this.isComplete = isComplete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesFormatType")
    public String seriesFormatType;
    public SeriesSeries withSeriesFormatType(String seriesFormatType) {
        this.seriesFormatType = seriesFormatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesId")
    public String seriesId;
    public SeriesSeries withSeriesId(String seriesId) {
        this.seriesId = seriesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesSubscriptionReleaseInfo")
    public SeriesSeriesSeriesSubscriptionReleaseInfo seriesSubscriptionReleaseInfo;
    public SeriesSeries withSeriesSubscriptionReleaseInfo(SeriesSeriesSeriesSubscriptionReleaseInfo seriesSubscriptionReleaseInfo) {
        this.seriesSubscriptionReleaseInfo = seriesSubscriptionReleaseInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesType")
    public String seriesType;
    public SeriesSeries withSeriesType(String seriesType) {
        this.seriesType = seriesType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public SeriesSeries withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SeriesSeries withTitle(String title) {
        this.title = title;
        return this;
    }
}