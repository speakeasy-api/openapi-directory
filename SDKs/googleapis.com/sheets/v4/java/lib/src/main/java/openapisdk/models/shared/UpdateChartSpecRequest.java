package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateChartSpecRequest
 * Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
**/
public class UpdateChartSpecRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chartId")
    public Integer chartId;
    public UpdateChartSpecRequest withChartId(Integer chartId) {
        this.chartId = chartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public ChartSpec spec;
    public UpdateChartSpecRequest withSpec(ChartSpec spec) {
        this.spec = spec;
        return this;
    }
}