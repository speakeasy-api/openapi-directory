package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Crop
 * Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset.
**/
public class Crop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottom")
    public Float bottom;
    public Crop withBottom(Float bottom) {
        this.bottom = bottom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Float left;
    public Crop withLeft(Float left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("right")
    public Float right;
    public Crop withRight(Float right) {
        this.right = right;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Float top;
    public Crop withTop(Float top) {
        this.top = top;
        return this;
    }
}