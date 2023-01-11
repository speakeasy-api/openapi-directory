package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostQuery200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public PostQuery200ApplicationJsonExplanation[] explanation;
    public PostQuery200ApplicationJson withExplanation(PostQuery200ApplicationJsonExplanation[] explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public PostQuery200ApplicationJsonMetrics metrics;
    public PostQuery200ApplicationJson withMetrics(PostQuery200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public PostQuery200ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}