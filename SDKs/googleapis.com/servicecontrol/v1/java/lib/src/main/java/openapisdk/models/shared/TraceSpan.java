package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TraceSpan
 * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace.
**/
public class TraceSpan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attributes attributes;
    public TraceSpan withAttributes(Attributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childSpanCount")
    public Integer childSpanCount;
    public TraceSpan withChildSpanCount(Integer childSpanCount) {
        this.childSpanCount = childSpanCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public TruncatableString displayName;
    public TraceSpan withDisplayName(TruncatableString displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public TraceSpan withEndTime(String endTime) {
        this.endTime = endTime;
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
    @JsonProperty("sameProcessAsParentSpan")
    public Boolean sameProcessAsParentSpan;
    public TraceSpan withSameProcessAsParentSpan(Boolean sameProcessAsParentSpan) {
        this.sameProcessAsParentSpan = sameProcessAsParentSpan;
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
    @JsonProperty("spanKind")
    public TraceSpanSpanKindEnum spanKind;
    public TraceSpan withSpanKind(TraceSpanSpanKindEnum spanKind) {
        this.spanKind = spanKind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public TraceSpan withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public TraceSpan withStatus(Status status) {
        this.status = status;
        return this;
    }
}