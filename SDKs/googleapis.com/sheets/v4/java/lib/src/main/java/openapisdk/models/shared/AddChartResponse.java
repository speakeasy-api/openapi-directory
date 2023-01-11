package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddChartResponse
 * The result of adding a chart to a spreadsheet.
**/
public class AddChartResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chart")
    public EmbeddedChart chart;
    public AddChartResponse withChart(EmbeddedChart chart) {
        this.chart = chart;
        return this;
    }
}