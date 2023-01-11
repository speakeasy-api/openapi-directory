package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TraceSpan
 * A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
**/
public class TraceSpan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public TraceSpan withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public TraceSpanKindEnum kind;
    public TraceSpan withKind(TraceSpanKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public TraceSpan withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TraceSpan withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentSpanId")
    public String parentSpanId;
    public TraceSpan withParentSpanId(String parentSpanId) {
        this.parentSpanId = parentSpanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spanId")
    public String spanId;
    public TraceSpan withSpanId(String spanId) {
        this.spanId = spanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public TraceSpan withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}