package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsAllSeverityTrend200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high")
    public GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh[] high;
    public GetTargetsAllSeverityTrend200ApplicationJsonResults withHigh(GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh[] high) {
        this.high = high;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low")
    public GetTargetsAllSeverityTrend200ApplicationJsonResultsLow[] low;
    public GetTargetsAllSeverityTrend200ApplicationJsonResults withLow(GetTargetsAllSeverityTrend200ApplicationJsonResultsLow[] low) {
        this.low = low;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium[] medium;
    public GetTargetsAllSeverityTrend200ApplicationJsonResults withMedium(GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium[] medium) {
        this.medium = medium;
        return this;
    }
}