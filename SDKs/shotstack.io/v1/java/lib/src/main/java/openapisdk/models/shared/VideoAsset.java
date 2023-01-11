package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoAsset
 * The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
**/
public class VideoAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crop")
    public Crop crop;
    public VideoAsset withCrop(Crop crop) {
        this.crop = crop;
        return this;
    }
    @JsonProperty("src")
    public String src;
    public VideoAsset withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim")
    public Double trim;
    public VideoAsset withTrim(Double trim) {
        this.trim = trim;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public VideoAsset withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Double volume;
    public VideoAsset withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
}