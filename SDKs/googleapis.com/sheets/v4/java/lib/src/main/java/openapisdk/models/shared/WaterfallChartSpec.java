package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaterfallChartSpec
 * A waterfall chart.
**/
public class WaterfallChartSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorLineStyle")
    public LineStyle connectorLineStyle;
    public WaterfallChartSpec withConnectorLineStyle(LineStyle connectorLineStyle) {
        this.connectorLineStyle = connectorLineStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public WaterfallChartDomain domain;
    public WaterfallChartSpec withDomain(WaterfallChartDomain domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstValueIsTotal")
    public Boolean firstValueIsTotal;
    public WaterfallChartSpec withFirstValueIsTotal(Boolean firstValueIsTotal) {
        this.firstValueIsTotal = firstValueIsTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideConnectorLines")
    public Boolean hideConnectorLines;
    public WaterfallChartSpec withHideConnectorLines(Boolean hideConnectorLines) {
        this.hideConnectorLines = hideConnectorLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public WaterfallChartSeries[] series;
    public WaterfallChartSpec withSeries(WaterfallChartSeries[] series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackedType")
    public WaterfallChartSpecStackedTypeEnum stackedType;
    public WaterfallChartSpec withStackedType(WaterfallChartSpecStackedTypeEnum stackedType) {
        this.stackedType = stackedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDataLabel")
    public DataLabel totalDataLabel;
    public WaterfallChartSpec withTotalDataLabel(DataLabel totalDataLabel) {
        this.totalDataLabel = totalDataLabel;
        return this;
    }
}