package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TreemapChartColorScale
 * A color scale for a treemap chart.
**/
public class TreemapChartColorScale {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValueColor")
    public Color maxValueColor;
    public TreemapChartColorScale withMaxValueColor(Color maxValueColor) {
        this.maxValueColor = maxValueColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValueColorStyle")
    public ColorStyle maxValueColorStyle;
    public TreemapChartColorScale withMaxValueColorStyle(ColorStyle maxValueColorStyle) {
        this.maxValueColorStyle = maxValueColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("midValueColor")
    public Color midValueColor;
    public TreemapChartColorScale withMidValueColor(Color midValueColor) {
        this.midValueColor = midValueColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("midValueColorStyle")
    public ColorStyle midValueColorStyle;
    public TreemapChartColorScale withMidValueColorStyle(ColorStyle midValueColorStyle) {
        this.midValueColorStyle = midValueColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValueColor")
    public Color minValueColor;
    public TreemapChartColorScale withMinValueColor(Color minValueColor) {
        this.minValueColor = minValueColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValueColorStyle")
    public ColorStyle minValueColorStyle;
    public TreemapChartColorScale withMinValueColorStyle(ColorStyle minValueColorStyle) {
        this.minValueColorStyle = minValueColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noDataColor")
    public Color noDataColor;
    public TreemapChartColorScale withNoDataColor(Color noDataColor) {
        this.noDataColor = noDataColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noDataColorStyle")
    public ColorStyle noDataColorStyle;
    public TreemapChartColorScale withNoDataColorStyle(ColorStyle noDataColorStyle) {
        this.noDataColorStyle = noDataColorStyle;
        return this;
    }
}