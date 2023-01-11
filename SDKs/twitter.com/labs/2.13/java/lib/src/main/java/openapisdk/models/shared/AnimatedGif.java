package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnimatedGif
 * This contains the list of the fields that are common to all media returned.
**/
public class AnimatedGif {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public AnimatedGif withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_key")
    public String mediaKey;
    public AnimatedGif withMediaKey(String mediaKey) {
        this.mediaKey = mediaKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_image_url")
    public String previewImageUrl;
    public AnimatedGif withPreviewImageUrl(String previewImageUrl) {
        this.previewImageUrl = previewImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AnimatedGifTypeEnum type;
    public AnimatedGif withType(AnimatedGifTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public AnimatedGif withWidth(Long width) {
        this.width = width;
        return this;
    }
}