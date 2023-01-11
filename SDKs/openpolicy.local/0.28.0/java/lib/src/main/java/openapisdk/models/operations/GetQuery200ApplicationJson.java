package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQuery200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public GetQuery200ApplicationJsonExplanation[] explanation;
    public GetQuery200ApplicationJson withExplanation(GetQuery200ApplicationJsonExplanation[] explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public GetQuery200ApplicationJsonMetrics metrics;
    public GetQuery200ApplicationJson withMetrics(GetQuery200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public GetQuery200ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}