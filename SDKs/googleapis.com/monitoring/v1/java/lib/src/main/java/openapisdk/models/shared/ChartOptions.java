package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartOptions
 * Options to control visual rendering of a chart.
**/
public class ChartOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public ChartOptionsModeEnum mode;
    public ChartOptions withMode(ChartOptionsModeEnum mode) {
        this.mode = mode;
        return this;
    }
}