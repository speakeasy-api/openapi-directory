package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Crop
 * Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
**/
public class Crop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottomPixels")
    public Integer bottomPixels;
    public Crop withBottomPixels(Integer bottomPixels) {
        this.bottomPixels = bottomPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leftPixels")
    public Integer leftPixels;
    public Crop withLeftPixels(Integer leftPixels) {
        this.leftPixels = leftPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rightPixels")
    public Integer rightPixels;
    public Crop withRightPixels(Integer rightPixels) {
        this.rightPixels = rightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topPixels")
    public Integer topPixels;
    public Crop withTopPixels(Integer topPixels) {
        this.topPixels = topPixels;
        return this;
    }
}