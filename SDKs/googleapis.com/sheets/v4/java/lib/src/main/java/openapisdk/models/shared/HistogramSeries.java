package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistogramSeries
 * A histogram series containing the series color and data.
**/
public class HistogramSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barColor")
    public Color barColor;
    public HistogramSeries withBarColor(Color barColor) {
        this.barColor = barColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barColorStyle")
    public ColorStyle barColorStyle;
    public HistogramSeries withBarColorStyle(ColorStyle barColorStyle) {
        this.barColorStyle = barColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ChartData data;
    public HistogramSeries withData(ChartData data) {
        this.data = data;
        return this;
    }
}