package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelSettings
 * Branding properties for the channel view.
**/
public class ChannelSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public ChannelSettings withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguage")
    public String defaultLanguage;
    public ChannelSettings withDefaultLanguage(String defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTab")
    public String defaultTab;
    public ChannelSettings withDefaultTab(String defaultTab) {
        this.defaultTab = defaultTab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ChannelSettings withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featuredChannelsTitle")
    public String featuredChannelsTitle;
    public ChannelSettings withFeaturedChannelsTitle(String featuredChannelsTitle) {
        this.featuredChannelsTitle = featuredChannelsTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featuredChannelsUrls")
    public String[] featuredChannelsUrls;
    public ChannelSettings withFeaturedChannelsUrls(String[] featuredChannelsUrls) {
        this.featuredChannelsUrls = featuredChannelsUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String keywords;
    public ChannelSettings withKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moderateComments")
    public Boolean moderateComments;
    public ChannelSettings withModerateComments(Boolean moderateComments) {
        this.moderateComments = moderateComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileColor")
    public String profileColor;
    public ChannelSettings withProfileColor(String profileColor) {
        this.profileColor = profileColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showBrowseView")
    public Boolean showBrowseView;
    public ChannelSettings withShowBrowseView(Boolean showBrowseView) {
        this.showBrowseView = showBrowseView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showRelatedChannels")
    public Boolean showRelatedChannels;
    public ChannelSettings withShowRelatedChannels(Boolean showRelatedChannels) {
        this.showRelatedChannels = showRelatedChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ChannelSettings withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingAnalyticsAccountId")
    public String trackingAnalyticsAccountId;
    public ChannelSettings withTrackingAnalyticsAccountId(String trackingAnalyticsAccountId) {
        this.trackingAnalyticsAccountId = trackingAnalyticsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsubscribedTrailer")
    public String unsubscribedTrailer;
    public ChannelSettings withUnsubscribedTrailer(String unsubscribedTrailer) {
        this.unsubscribedTrailer = unsubscribedTrailer;
        return this;
    }
}