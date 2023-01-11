package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Link
 * A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.
**/
public class Link {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attributes attributes;
    public Link withAttributes(Attributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spanId")
    public String spanId;
    public Link withSpanId(String spanId) {
        this.spanId = spanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traceId")
    public String traceId;
    public Link withTraceId(String traceId) {
        this.traceId = traceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public LinkTypeEnum type;
    public Link withType(LinkTypeEnum type) {
        this.type = type;
        return this;
    }
}