package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmbeddedChart
 * A chart embedded in a sheet.
**/
public class EmbeddedChart {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("border")
    public EmbeddedObjectBorder border;
    public EmbeddedChart withBorder(EmbeddedObjectBorder border) {
        this.border = border;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chartId")
    public Integer chartId;
    public EmbeddedChart withChartId(Integer chartId) {
        this.chartId = chartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public EmbeddedObjectPosition position;
    public EmbeddedChart withPosition(EmbeddedObjectPosition position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public ChartSpec spec;
    public EmbeddedChart withSpec(ChartSpec spec) {
        this.spec = spec;
        return this;
    }
}