package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddChartRequest
 * Adds a chart to a sheet in the spreadsheet.
**/
public class AddChartRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chart")
    public EmbeddedChart chart;
    public AddChartRequest withChart(EmbeddedChart chart) {
        this.chart = chart;
        return this;
    }
}