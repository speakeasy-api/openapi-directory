package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartSpec
 * The specifications of a chart.
**/
public class ChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altText")
    public String altText;
    public ChartSpec withAltText(String altText) {
        this.altText = altText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public Color backgroundColor;
    public ChartSpec withBackgroundColor(Color backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColorStyle")
    public ColorStyle backgroundColorStyle;
    public ChartSpec withBackgroundColorStyle(ColorStyle backgroundColorStyle) {
        this.backgroundColorStyle = backgroundColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicChart")
    public BasicChartSpec basicChart;
    public ChartSpec withBasicChart(BasicChartSpec basicChart) {
        this.basicChart = basicChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bubbleChart")
    public BubbleChartSpec bubbleChart;
    public ChartSpec withBubbleChart(BubbleChartSpec bubbleChart) {
        this.bubbleChart = bubbleChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candlestickChart")
    public CandlestickChartSpec candlestickChart;
    public ChartSpec withCandlestickChart(CandlestickChartSpec candlestickChart) {
        this.candlestickChart = candlestickChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceChartProperties")
    public DataSourceChartProperties dataSourceChartProperties;
    public ChartSpec withDataSourceChartProperties(DataSourceChartProperties dataSourceChartProperties) {
        this.dataSourceChartProperties = dataSourceChartProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterSpecs")
    public FilterSpec[] filterSpecs;
    public ChartSpec withFilterSpecs(FilterSpec[] filterSpecs) {
        this.filterSpecs = filterSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fontName")
    public String fontName;
    public ChartSpec withFontName(String fontName) {
        this.fontName = fontName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenDimensionStrategy")
    public ChartSpecHiddenDimensionStrategyEnum hiddenDimensionStrategy;
    public ChartSpec withHiddenDimensionStrategy(ChartSpecHiddenDimensionStrategyEnum hiddenDimensionStrategy) {
        this.hiddenDimensionStrategy = hiddenDimensionStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("histogramChart")
    public HistogramChartSpec histogramChart;
    public ChartSpec withHistogramChart(HistogramChartSpec histogramChart) {
        this.histogramChart = histogramChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximized")
    public Boolean maximized;
    public ChartSpec withMaximized(Boolean maximized) {
        this.maximized = maximized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgChart")
    public OrgChartSpec orgChart;
    public ChartSpec withOrgChart(OrgChartSpec orgChart) {
        this.orgChart = orgChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pieChart")
    public PieChartSpec pieChart;
    public ChartSpec withPieChart(PieChartSpec pieChart) {
        this.pieChart = pieChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scorecardChart")
    public ScorecardChartSpec scorecardChart;
    public ChartSpec withScorecardChart(ScorecardChartSpec scorecardChart) {
        this.scorecardChart = scorecardChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortSpecs")
    public SortSpec[] sortSpecs;
    public ChartSpec withSortSpecs(SortSpec[] sortSpecs) {
        this.sortSpecs = sortSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtitle")
    public String subtitle;
    public ChartSpec withSubtitle(String subtitle) {
        this.subtitle = subtitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtitleTextFormat")
    public TextFormat subtitleTextFormat;
    public ChartSpec withSubtitleTextFormat(TextFormat subtitleTextFormat) {
        this.subtitleTextFormat = subtitleTextFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtitleTextPosition")
    public TextPosition subtitleTextPosition;
    public ChartSpec withSubtitleTextPosition(TextPosition subtitleTextPosition) {
        this.subtitleTextPosition = subtitleTextPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ChartSpec withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("titleTextFormat")
    public TextFormat titleTextFormat;
    public ChartSpec withTitleTextFormat(TextFormat titleTextFormat) {
        this.titleTextFormat = titleTextFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("titleTextPosition")
    public TextPosition titleTextPosition;
    public ChartSpec withTitleTextPosition(TextPosition titleTextPosition) {
        this.titleTextPosition = titleTextPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treemapChart")
    public TreemapChartSpec treemapChart;
    public ChartSpec withTreemapChart(TreemapChartSpec treemapChart) {
        this.treemapChart = treemapChart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterfallChart")
    public WaterfallChartSpec waterfallChart;
    public ChartSpec withWaterfallChart(WaterfallChartSpec waterfallChart) {
        this.waterfallChart = waterfallChart;
        return this;
    }
}