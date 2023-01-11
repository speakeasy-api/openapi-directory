package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsTargetIdSeverityTrend200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high")
    public GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh[] high;
    public GetTargetsTargetIdSeverityTrend200ApplicationJsonResults withHigh(GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh[] high) {
        this.high = high;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low")
    public GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow[] low;
    public GetTargetsTargetIdSeverityTrend200ApplicationJsonResults withLow(GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow[] low) {
        this.low = low;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium[] medium;
    public GetTargetsTargetIdSeverityTrend200ApplicationJsonResults withMedium(GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium[] medium) {
        this.medium = medium;
        return this;
    }
}