package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1ColorInfo
 * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
**/
public class GoogleCloudVisionV1p1beta1ColorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public Color color;
    public GoogleCloudVisionV1p1beta1ColorInfo withColor(Color color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelFraction")
    public Float pixelFraction;
    public GoogleCloudVisionV1p1beta1ColorInfo withPixelFraction(Float pixelFraction) {
        this.pixelFraction = pixelFraction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudVisionV1p1beta1ColorInfo withScore(Float score) {
        this.score = score;
        return this;
    }
}