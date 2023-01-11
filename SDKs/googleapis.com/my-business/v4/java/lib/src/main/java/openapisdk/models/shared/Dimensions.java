package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dimensions
 * Dimensions of the media item.
**/
public class Dimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPixels")
    public Integer heightPixels;
    public Dimensions withHeightPixels(Integer heightPixels) {
        this.heightPixels = heightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPixels")
    public Integer widthPixels;
    public Dimensions withWidthPixels(Integer widthPixels) {
        this.widthPixels = widthPixels;
        return this;
    }
}