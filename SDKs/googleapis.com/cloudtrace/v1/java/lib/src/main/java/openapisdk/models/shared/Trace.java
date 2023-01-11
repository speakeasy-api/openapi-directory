package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Trace
 * A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
**/
public class Trace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public Trace withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spans")
    public TraceSpan[] spans;
    public Trace withSpans(TraceSpan[] spans) {
        this.spans = spans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traceId")
    public String traceId;
    public Trace withTraceId(String traceId) {
        this.traceId = traceId;
        return this;
    }
}