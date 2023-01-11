package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Result {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colors")
    public Color[] colors;
    public Result withColors(Color[] colors) {
        this.colors = colors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public Result withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_of_pixel_in_image")
    public Long numberOfPixelInImage;
    public Result withNumberOfPixelInImage(Long numberOfPixelInImage) {
        this.numberOfPixelInImage = numberOfPixelInImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public Result withWidth(Long width) {
        this.width = width;
        return this;
    }
}