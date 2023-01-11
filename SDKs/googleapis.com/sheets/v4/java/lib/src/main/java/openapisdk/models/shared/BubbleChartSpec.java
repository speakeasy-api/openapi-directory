package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BubbleChartSpec
 * A bubble chart.
**/
public class BubbleChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleBorderColor")
    public Color bubbleBorderColor;
    public BubbleChartSpec withBubbleBorderColor(Color bubbleBorderColor) {
        this.bubbleBorderColor = bubbleBorderColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleBorderColorStyle")
    public ColorStyle bubbleBorderColorStyle;
    public BubbleChartSpec withBubbleBorderColorStyle(ColorStyle bubbleBorderColorStyle) {
        this.bubbleBorderColorStyle = bubbleBorderColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleLabels")
    public ChartData bubbleLabels;
    public BubbleChartSpec withBubbleLabels(ChartData bubbleLabels) {
        this.bubbleLabels = bubbleLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleMaxRadiusSize")
    public Integer bubbleMaxRadiusSize;
    public BubbleChartSpec withBubbleMaxRadiusSize(Integer bubbleMaxRadiusSize) {
        this.bubbleMaxRadiusSize = bubbleMaxRadiusSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleMinRadiusSize")
    public Integer bubbleMinRadiusSize;
    public BubbleChartSpec withBubbleMinRadiusSize(Integer bubbleMinRadiusSize) {
        this.bubbleMinRadiusSize = bubbleMinRadiusSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleOpacity")
    public Float bubbleOpacity;
    public BubbleChartSpec withBubbleOpacity(Float bubbleOpacity) {
        this.bubbleOpacity = bubbleOpacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleSizes")
    public ChartData bubbleSizes;
    public BubbleChartSpec withBubbleSizes(ChartData bubbleSizes) {
        this.bubbleSizes = bubbleSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleTextStyle")
    public TextFormat bubbleTextStyle;
    public BubbleChartSpec withBubbleTextStyle(TextFormat bubbleTextStyle) {
        this.bubbleTextStyle = bubbleTextStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public ChartData domain;
    public BubbleChartSpec withDomain(ChartData domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupIds")
    public ChartData groupIds;
    public BubbleChartSpec withGroupIds(ChartData groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legendPosition")
    public BubbleChartSpecLegendPositionEnum legendPosition;
    public BubbleChartSpec withLegendPosition(BubbleChartSpecLegendPositionEnum legendPosition) {
        this.legendPosition = legendPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public ChartData series;
    public BubbleChartSpec withSeries(ChartData series) {
        this.series = series;
        return this;
    }
}