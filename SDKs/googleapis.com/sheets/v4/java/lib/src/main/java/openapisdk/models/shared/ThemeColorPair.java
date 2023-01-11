package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThemeColorPair
 * A pair mapping a spreadsheet theme color type to the concrete color it represents.
**/
public class ThemeColorPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public ColorStyle color;
    public ThemeColorPair withColor(ColorStyle color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorType")
    public ThemeColorPairColorTypeEnum colorType;
    public ThemeColorPair withColorType(ThemeColorPairColorTypeEnum colorType) {
        this.colorType = colorType;
        return this;
    }
}