package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageSettings
 * Branding properties for images associated with the channel.
**/
public class ImageSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundImageUrl")
    public LocalizedProperty backgroundImageUrl;
    public ImageSettings withBackgroundImageUrl(LocalizedProperty backgroundImageUrl) {
        this.backgroundImageUrl = backgroundImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerExternalUrl")
    public String bannerExternalUrl;
    public ImageSettings withBannerExternalUrl(String bannerExternalUrl) {
        this.bannerExternalUrl = bannerExternalUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerImageUrl")
    public String bannerImageUrl;
    public ImageSettings withBannerImageUrl(String bannerImageUrl) {
        this.bannerImageUrl = bannerImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerMobileExtraHdImageUrl")
    public String bannerMobileExtraHdImageUrl;
    public ImageSettings withBannerMobileExtraHdImageUrl(String bannerMobileExtraHdImageUrl) {
        this.bannerMobileExtraHdImageUrl = bannerMobileExtraHdImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerMobileHdImageUrl")
    public String bannerMobileHdImageUrl;
    public ImageSettings withBannerMobileHdImageUrl(String bannerMobileHdImageUrl) {
        this.bannerMobileHdImageUrl = bannerMobileHdImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerMobileImageUrl")
    public String bannerMobileImageUrl;
    public ImageSettings withBannerMobileImageUrl(String bannerMobileImageUrl) {
        this.bannerMobileImageUrl = bannerMobileImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerMobileLowImageUrl")
    public String bannerMobileLowImageUrl;
    public ImageSettings withBannerMobileLowImageUrl(String bannerMobileLowImageUrl) {
        this.bannerMobileLowImageUrl = bannerMobileLowImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerMobileMediumHdImageUrl")
    public String bannerMobileMediumHdImageUrl;
    public ImageSettings withBannerMobileMediumHdImageUrl(String bannerMobileMediumHdImageUrl) {
        this.bannerMobileMediumHdImageUrl = bannerMobileMediumHdImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerTabletExtraHdImageUrl")
    public String bannerTabletExtraHdImageUrl;
    public ImageSettings withBannerTabletExtraHdImageUrl(String bannerTabletExtraHdImageUrl) {
        this.bannerTabletExtraHdImageUrl = bannerTabletExtraHdImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerTabletHdImageUrl")
    public String bannerTabletHdImageUrl;
    public ImageSettings withBannerTabletHdImageUrl(String bannerTabletHdImageUrl) {
        this.bannerTabletHdImageUrl = bannerTabletHdImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerTabletImageUrl")
    public String bannerTabletImageUrl;
    public ImageSettings withBannerTabletImageUrl(String bannerTabletImageUrl) {
        this.bannerTabletImageUrl = bannerTabletImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerTabletLowImageUrl")
    public String bannerTabletLowImageUrl;
    public ImageSettings withBannerTabletLowImageUrl(String bannerTabletLowImageUrl) {
        this.bannerTabletLowImageUrl = bannerTabletLowImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerTvHighImageUrl")
    public String bannerTvHighImageUrl;
    public ImageSettings withBannerTvHighImageUrl(String bannerTvHighImageUrl) {
        this.bannerTvHighImageUrl = bannerTvHighImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerTvImageUrl")
    public String bannerTvImageUrl;
    public ImageSettings withBannerTvImageUrl(String bannerTvImageUrl) {
        this.bannerTvImageUrl = bannerTvImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerTvLowImageUrl")
    public String bannerTvLowImageUrl;
    public ImageSettings withBannerTvLowImageUrl(String bannerTvLowImageUrl) {
        this.bannerTvLowImageUrl = bannerTvLowImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bannerTvMediumImageUrl")
    public String bannerTvMediumImageUrl;
    public ImageSettings withBannerTvMediumImageUrl(String bannerTvMediumImageUrl) {
        this.bannerTvMediumImageUrl = bannerTvMediumImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largeBrandedBannerImageImapScript")
    public LocalizedProperty largeBrandedBannerImageImapScript;
    public ImageSettings withLargeBrandedBannerImageImapScript(LocalizedProperty largeBrandedBannerImageImapScript) {
        this.largeBrandedBannerImageImapScript = largeBrandedBannerImageImapScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largeBrandedBannerImageUrl")
    public LocalizedProperty largeBrandedBannerImageUrl;
    public ImageSettings withLargeBrandedBannerImageUrl(LocalizedProperty largeBrandedBannerImageUrl) {
        this.largeBrandedBannerImageUrl = largeBrandedBannerImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smallBrandedBannerImageImapScript")
    public LocalizedProperty smallBrandedBannerImageImapScript;
    public ImageSettings withSmallBrandedBannerImageImapScript(LocalizedProperty smallBrandedBannerImageImapScript) {
        this.smallBrandedBannerImageImapScript = smallBrandedBannerImageImapScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smallBrandedBannerImageUrl")
    public LocalizedProperty smallBrandedBannerImageUrl;
    public ImageSettings withSmallBrandedBannerImageUrl(LocalizedProperty smallBrandedBannerImageUrl) {
        this.smallBrandedBannerImageUrl = smallBrandedBannerImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingImageUrl")
    public String trackingImageUrl;
    public ImageSettings withTrackingImageUrl(String trackingImageUrl) {
        this.trackingImageUrl = trackingImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchIconImageUrl")
    public String watchIconImageUrl;
    public ImageSettings withWatchIconImageUrl(String watchIconImageUrl) {
        this.watchIconImageUrl = watchIconImageUrl;
        return this;
    }
}