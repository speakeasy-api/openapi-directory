package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DiscoveryclustersClustersBannerWithContentContainer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fillColorArgb")
    public String fillColorArgb;
    public DiscoveryclustersClustersBannerWithContentContainer withFillColorArgb(String fillColorArgb) {
        this.fillColorArgb = fillColorArgb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public DiscoveryclustersClustersBannerWithContentContainer withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maskColorArgb")
    public String maskColorArgb;
    public DiscoveryclustersClustersBannerWithContentContainer withMaskColorArgb(String maskColorArgb) {
        this.maskColorArgb = maskColorArgb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moreButtonText")
    public String moreButtonText;
    public DiscoveryclustersClustersBannerWithContentContainer withMoreButtonText(String moreButtonText) {
        this.moreButtonText = moreButtonText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moreButtonUrl")
    public String moreButtonUrl;
    public DiscoveryclustersClustersBannerWithContentContainer withMoreButtonUrl(String moreButtonUrl) {
        this.moreButtonUrl = moreButtonUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textColorArgb")
    public String textColorArgb;
    public DiscoveryclustersClustersBannerWithContentContainer withTextColorArgb(String textColorArgb) {
        this.textColorArgb = textColorArgb;
        return this;
    }
}