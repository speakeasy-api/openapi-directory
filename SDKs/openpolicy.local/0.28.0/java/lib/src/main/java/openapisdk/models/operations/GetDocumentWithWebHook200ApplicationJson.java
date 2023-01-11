package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithWebHook200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public GetDocumentWithWebHook200ApplicationJsonExplanation[] explanation;
    public GetDocumentWithWebHook200ApplicationJson withExplanation(GetDocumentWithWebHook200ApplicationJsonExplanation[] explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public GetDocumentWithWebHook200ApplicationJsonMetrics metrics;
    public GetDocumentWithWebHook200ApplicationJson withMetrics(GetDocumentWithWebHook200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provenance")
    public GetDocumentWithWebHook200ApplicationJsonProvenance provenance;
    public GetDocumentWithWebHook200ApplicationJson withProvenance(GetDocumentWithWebHook200ApplicationJsonProvenance provenance) {
        this.provenance = provenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public GetDocumentWithWebHook200ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}