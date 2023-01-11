package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Padding
 * The amount of padding around the cell, in pixels. When updating padding, every field must be specified.
**/
public class Padding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bottom")
    public Integer bottom;
    public Padding withBottom(Integer bottom) {
        this.bottom = bottom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Integer left;
    public Padding withLeft(Integer left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("right")
    public Integer right;
    public Padding withRight(Integer right) {
        this.right = right;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Integer top;
    public Padding withTop(Integer top) {
        this.top = top;
        return this;
    }
}