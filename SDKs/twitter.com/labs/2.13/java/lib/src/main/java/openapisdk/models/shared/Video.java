package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Video
 * This contains the list of the fields that are common to all media returned.
**/
public class Video {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_ms")
    public Long durationMs;
    public Video withDurationMs(Long durationMs) {
        this.durationMs = durationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public Video withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_key")
    public String mediaKey;
    public Video withMediaKey(String mediaKey) {
        this.mediaKey = mediaKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_public_metrics")
    public VideoNonPublicMetrics nonPublicMetrics;
    public Video withNonPublicMetrics(VideoNonPublicMetrics nonPublicMetrics) {
        this.nonPublicMetrics = nonPublicMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organic_metrics")
    public VideoOrganicMetrics organicMetrics;
    public Video withOrganicMetrics(VideoOrganicMetrics organicMetrics) {
        this.organicMetrics = organicMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_image_url")
    public String previewImageUrl;
    public Video withPreviewImageUrl(String previewImageUrl) {
        this.previewImageUrl = previewImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promoted_metrics")
    public VideoPromotedMetrics promotedMetrics;
    public Video withPromotedMetrics(VideoPromotedMetrics promotedMetrics) {
        this.promotedMetrics = promotedMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_metrics")
    public VideoPublicMetrics publicMetrics;
    public Video withPublicMetrics(VideoPublicMetrics publicMetrics) {
        this.publicMetrics = publicMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public VideoTypeEnum type;
    public Video withType(VideoTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public Video withWidth(Long width) {
        this.width = width;
        return this;
    }
}