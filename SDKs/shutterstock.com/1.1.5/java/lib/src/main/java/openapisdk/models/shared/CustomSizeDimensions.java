package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomSizeDimensions
 * A custom height or a custom width to resize the image to, but not both (experimental)
**/
public class CustomSizeDimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public CustomSizeDimensions withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public CustomSizeDimensions withWidth(Long width) {
        this.width = width;
        return this;
    }
}