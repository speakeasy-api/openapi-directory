package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeletePolicyModule200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public DeletePolicyModule200ApplicationJsonExplanation[] explanation;
    public DeletePolicyModule200ApplicationJson withExplanation(DeletePolicyModule200ApplicationJsonExplanation[] explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public DeletePolicyModule200ApplicationJsonMetrics metrics;
    public DeletePolicyModule200ApplicationJson withMetrics(DeletePolicyModule200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provenance")
    public DeletePolicyModule200ApplicationJsonProvenance provenance;
    public DeletePolicyModule200ApplicationJson withProvenance(DeletePolicyModule200ApplicationJsonProvenance provenance) {
        this.provenance = provenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public DeletePolicyModule200ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}