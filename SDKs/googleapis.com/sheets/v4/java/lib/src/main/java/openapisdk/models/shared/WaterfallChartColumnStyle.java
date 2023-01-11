package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaterfallChartColumnStyle
 * Styles for a waterfall chart column.
**/
public class WaterfallChartColumnStyle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public Color color;
    public WaterfallChartColumnStyle withColor(Color color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorStyle")
    public ColorStyle colorStyle;
    public WaterfallChartColumnStyle withColorStyle(ColorStyle colorStyle) {
        this.colorStyle = colorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public WaterfallChartColumnStyle withLabel(String label) {
        this.label = label;
        return this;
    }
}