package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pad
 * Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
**/
public class Pad {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottomPixels")
    public Integer bottomPixels;
    public Pad withBottomPixels(Integer bottomPixels) {
        this.bottomPixels = bottomPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leftPixels")
    public Integer leftPixels;
    public Pad withLeftPixels(Integer leftPixels) {
        this.leftPixels = leftPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rightPixels")
    public Integer rightPixels;
    public Pad withRightPixels(Integer rightPixels) {
        this.rightPixels = rightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topPixels")
    public Integer topPixels;
    public Pad withTopPixels(Integer topPixels) {
        this.topPixels = topPixels;
        return this;
    }
}