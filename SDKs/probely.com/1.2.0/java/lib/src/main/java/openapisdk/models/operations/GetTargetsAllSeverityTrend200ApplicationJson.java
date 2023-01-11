package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsAllSeverityTrend200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetTargetsAllSeverityTrend200ApplicationJsonResults results;
    public GetTargetsAllSeverityTrend200ApplicationJson withResults(GetTargetsAllSeverityTrend200ApplicationJsonResults results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("step")
    public Float step;
    public GetTargetsAllSeverityTrend200ApplicationJson withStep(Float step) {
        this.step = step;
        return this;
    }
}