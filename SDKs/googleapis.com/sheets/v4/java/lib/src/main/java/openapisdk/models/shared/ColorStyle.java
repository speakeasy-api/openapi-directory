package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColorStyle
 * A color value.
**/
public class ColorStyle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rgbColor")
    public Color rgbColor;
    public ColorStyle withRgbColor(Color rgbColor) {
        this.rgbColor = rgbColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("themeColor")
    public ColorStyleThemeColorEnum themeColor;
    public ColorStyle withThemeColor(ColorStyleThemeColorEnum themeColor) {
        this.themeColor = themeColor;
        return this;
    }
}