package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCompile200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public PostCompile200ApplicationJsonExplanation[] explanation;
    public PostCompile200ApplicationJson withExplanation(PostCompile200ApplicationJsonExplanation[] explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public PostCompile200ApplicationJsonMetrics metrics;
    public PostCompile200ApplicationJson withMetrics(PostCompile200ApplicationJsonMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public PostCompile200ApplicationJson withResult(Object[] result) {
        this.result = result;
        return this;
    }
}