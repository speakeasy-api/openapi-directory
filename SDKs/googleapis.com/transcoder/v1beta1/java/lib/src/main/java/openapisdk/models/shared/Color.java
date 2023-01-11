package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Color
 * Color preprocessing configuration.
**/
public class Color {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brightness")
    public Double brightness;
    public Color withBrightness(Double brightness) {
        this.brightness = brightness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contrast")
    public Double contrast;
    public Color withContrast(Double contrast) {
        this.contrast = contrast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturation")
    public Double saturation;
    public Color withSaturation(Double saturation) {
        this.saturation = saturation;
        return this;
    }
}