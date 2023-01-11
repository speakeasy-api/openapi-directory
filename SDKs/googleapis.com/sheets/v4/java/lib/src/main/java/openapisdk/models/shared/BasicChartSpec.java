package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicChartSpec
 * The specification for a basic chart. See BasicChartType for the list of charts this supports.
**/
public class BasicChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("axis")
    public BasicChartAxis[] axis;
    public BasicChartSpec withAxis(BasicChartAxis[] axis) {
        this.axis = axis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chartType")
    public BasicChartSpecChartTypeEnum chartType;
    public BasicChartSpec withChartType(BasicChartSpecChartTypeEnum chartType) {
        this.chartType = chartType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compareMode")
    public BasicChartSpecCompareModeEnum compareMode;
    public BasicChartSpec withCompareMode(BasicChartSpecCompareModeEnum compareMode) {
        this.compareMode = compareMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public BasicChartDomain[] domains;
    public BasicChartSpec withDomains(BasicChartDomain[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerCount")
    public Integer headerCount;
    public BasicChartSpec withHeaderCount(Integer headerCount) {
        this.headerCount = headerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpolateNulls")
    public Boolean interpolateNulls;
    public BasicChartSpec withInterpolateNulls(Boolean interpolateNulls) {
        this.interpolateNulls = interpolateNulls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legendPosition")
    public BasicChartSpecLegendPositionEnum legendPosition;
    public BasicChartSpec withLegendPosition(BasicChartSpecLegendPositionEnum legendPosition) {
        this.legendPosition = legendPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineSmoothing")
    public Boolean lineSmoothing;
    public BasicChartSpec withLineSmoothing(Boolean lineSmoothing) {
        this.lineSmoothing = lineSmoothing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public BasicChartSeries[] series;
    public BasicChartSpec withSeries(BasicChartSeries[] series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackedType")
    public BasicChartSpecStackedTypeEnum stackedType;
    public BasicChartSpec withStackedType(BasicChartSpecStackedTypeEnum stackedType) {
        this.stackedType = stackedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threeDimensional")
    public Boolean threeDimensional;
    public BasicChartSpec withThreeDimensional(Boolean threeDimensional) {
        this.threeDimensional = threeDimensional;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDataLabel")
    public DataLabel totalDataLabel;
    public BasicChartSpec withTotalDataLabel(DataLabel totalDataLabel) {
        this.totalDataLabel = totalDataLabel;
        return this;
    }
}