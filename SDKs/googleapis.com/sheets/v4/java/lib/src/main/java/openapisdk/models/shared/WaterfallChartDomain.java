package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaterfallChartDomain
 * The domain of a waterfall chart.
**/
public class WaterfallChartDomain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ChartData data;
    public WaterfallChartDomain withData(ChartData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reversed")
    public Boolean reversed;
    public WaterfallChartDomain withReversed(Boolean reversed) {
        this.reversed = reversed;
        return this;
    }
}