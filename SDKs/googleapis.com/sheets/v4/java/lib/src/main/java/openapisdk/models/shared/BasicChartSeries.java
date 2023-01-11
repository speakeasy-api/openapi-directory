package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicChartSeries
 * A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price".
**/
public class BasicChartSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public Color color;
    public BasicChartSeries withColor(Color color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorStyle")
    public ColorStyle colorStyle;
    public BasicChartSeries withColorStyle(ColorStyle colorStyle) {
        this.colorStyle = colorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataLabel")
    public DataLabel dataLabel;
    public BasicChartSeries withDataLabel(DataLabel dataLabel) {
        this.dataLabel = dataLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineStyle")
    public LineStyle lineStyle;
    public BasicChartSeries withLineStyle(LineStyle lineStyle) {
        this.lineStyle = lineStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointStyle")
    public PointStyle pointStyle;
    public BasicChartSeries withPointStyle(PointStyle pointStyle) {
        this.pointStyle = pointStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public ChartData series;
    public BasicChartSeries withSeries(ChartData series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("styleOverrides")
    public BasicSeriesDataPointStyleOverride[] styleOverrides;
    public BasicChartSeries withStyleOverrides(BasicSeriesDataPointStyleOverride[] styleOverrides) {
        this.styleOverrides = styleOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetAxis")
    public BasicChartSeriesTargetAxisEnum targetAxis;
    public BasicChartSeries withTargetAxis(BasicChartSeriesTargetAxisEnum targetAxis) {
        this.targetAxis = targetAxis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BasicChartSeriesTypeEnum type;
    public BasicChartSeries withType(BasicChartSeriesTypeEnum type) {
        this.type = type;
        return this;
    }
}