package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocument200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public GetDocument200ApplicationJsonExplanation[] explanation;
    public GetDocument200ApplicationJson withExplanation(GetDocument200ApplicationJsonExplanation[] explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public GetDocument200ApplicationJsonMetrics metrics;
    public GetDocument200ApplicationJson withMetrics(GetDocument200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provenance")
    public GetDocument200ApplicationJsonProvenance provenance;
    public GetDocument200ApplicationJson withProvenance(GetDocument200ApplicationJsonProvenance provenance) {
        this.provenance = provenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public GetDocument200ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}