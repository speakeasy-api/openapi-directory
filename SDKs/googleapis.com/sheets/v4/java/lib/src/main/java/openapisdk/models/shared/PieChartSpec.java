package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PieChartSpec
 * A pie chart.
**/
public class PieChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public ChartData domain;
    public PieChartSpec withDomain(ChartData domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legendPosition")
    public PieChartSpecLegendPositionEnum legendPosition;
    public PieChartSpec withLegendPosition(PieChartSpecLegendPositionEnum legendPosition) {
        this.legendPosition = legendPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pieHole")
    public Double pieHole;
    public PieChartSpec withPieHole(Double pieHole) {
        this.pieHole = pieHole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public ChartData series;
    public PieChartSpec withSeries(ChartData series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threeDimensional")
    public Boolean threeDimensional;
    public PieChartSpec withThreeDimensional(Boolean threeDimensional) {
        this.threeDimensional = threeDimensional;
        return this;
    }
}