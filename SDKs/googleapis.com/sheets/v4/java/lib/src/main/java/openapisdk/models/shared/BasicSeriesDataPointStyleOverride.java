package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicSeriesDataPointStyleOverride
 * Style override settings for a single series data point.
**/
public class BasicSeriesDataPointStyleOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public Color color;
    public BasicSeriesDataPointStyleOverride withColor(Color color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorStyle")
    public ColorStyle colorStyle;
    public BasicSeriesDataPointStyleOverride withColorStyle(ColorStyle colorStyle) {
        this.colorStyle = colorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public BasicSeriesDataPointStyleOverride withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointStyle")
    public PointStyle pointStyle;
    public BasicSeriesDataPointStyleOverride withPointStyle(PointStyle pointStyle) {
        this.pointStyle = pointStyle;
        return this;
    }
}