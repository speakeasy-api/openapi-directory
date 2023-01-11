package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithPath200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public GetDocumentWithPath200ApplicationJsonExplanation[] explanation;
    public GetDocumentWithPath200ApplicationJson withExplanation(GetDocumentWithPath200ApplicationJsonExplanation[] explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public GetDocumentWithPath200ApplicationJsonMetrics metrics;
    public GetDocumentWithPath200ApplicationJson withMetrics(GetDocumentWithPath200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provenance")
    public GetDocumentWithPath200ApplicationJsonProvenance provenance;
    public GetDocumentWithPath200ApplicationJson withProvenance(GetDocumentWithPath200ApplicationJsonProvenance provenance) {
        this.provenance = provenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public GetDocumentWithPath200ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}