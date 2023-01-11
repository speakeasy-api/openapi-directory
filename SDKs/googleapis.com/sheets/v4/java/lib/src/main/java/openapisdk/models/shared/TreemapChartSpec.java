package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TreemapChartSpec
 * A Treemap chart.
**/
public class TreemapChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorData")
    public ChartData colorData;
    public TreemapChartSpec withColorData(ChartData colorData) {
        this.colorData = colorData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorScale")
    public TreemapChartColorScale colorScale;
    public TreemapChartSpec withColorScale(TreemapChartColorScale colorScale) {
        this.colorScale = colorScale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerColor")
    public Color headerColor;
    public TreemapChartSpec withHeaderColor(Color headerColor) {
        this.headerColor = headerColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerColorStyle")
    public ColorStyle headerColorStyle;
    public TreemapChartSpec withHeaderColorStyle(ColorStyle headerColorStyle) {
        this.headerColorStyle = headerColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideTooltips")
    public Boolean hideTooltips;
    public TreemapChartSpec withHideTooltips(Boolean hideTooltips) {
        this.hideTooltips = hideTooltips;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hintedLevels")
    public Integer hintedLevels;
    public TreemapChartSpec withHintedLevels(Integer hintedLevels) {
        this.hintedLevels = hintedLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public ChartData labels;
    public TreemapChartSpec withLabels(ChartData labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("levels")
    public Integer levels;
    public TreemapChartSpec withLevels(Integer levels) {
        this.levels = levels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public Double maxValue;
    public TreemapChartSpec withMaxValue(Double maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public Double minValue;
    public TreemapChartSpec withMinValue(Double minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLabels")
    public ChartData parentLabels;
    public TreemapChartSpec withParentLabels(ChartData parentLabels) {
        this.parentLabels = parentLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeData")
    public ChartData sizeData;
    public TreemapChartSpec withSizeData(ChartData sizeData) {
        this.sizeData = sizeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textFormat")
    public TextFormat textFormat;
    public TreemapChartSpec withTextFormat(TextFormat textFormat) {
        this.textFormat = textFormat;
        return this;
    }
}