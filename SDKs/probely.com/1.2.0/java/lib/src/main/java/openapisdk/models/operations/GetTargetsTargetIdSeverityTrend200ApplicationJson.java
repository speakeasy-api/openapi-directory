package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsTargetIdSeverityTrend200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetTargetsTargetIdSeverityTrend200ApplicationJsonResults results;
    public GetTargetsTargetIdSeverityTrend200ApplicationJson withResults(GetTargetsTargetIdSeverityTrend200ApplicationJsonResults results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("step")
    public Float step;
    public GetTargetsTargetIdSeverityTrend200ApplicationJson withStep(Float step) {
        this.step = step;
        return this;
    }
}