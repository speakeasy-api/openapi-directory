package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Span
 * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there might be gaps or overlaps between spans in a trace.
**/
public class Span {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attributes attributes;
    public Span withAttributes(Attributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childSpanCount")
    public Integer childSpanCount;
    public Span withChildSpanCount(Integer childSpanCount) {
        this.childSpanCount = childSpanCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public TruncatableString displayName;
    public Span withDisplayName(TruncatableString displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Span withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public Span withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Span withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentSpanId")
    public String parentSpanId;
    public Span withParentSpanId(String parentSpanId) {
        this.parentSpanId = parentSpanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sameProcessAsParentSpan")
    public Boolean sameProcessAsParentSpan;
    public Span withSameProcessAsParentSpan(Boolean sameProcessAsParentSpan) {
        this.sameProcessAsParentSpan = sameProcessAsParentSpan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spanId")
    public String spanId;
    public Span withSpanId(String spanId) {
        this.spanId = spanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spanKind")
    public SpanSpanKindEnum spanKind;
    public Span withSpanKind(SpanSpanKindEnum spanKind) {
        this.spanKind = spanKind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackTrace")
    public StackTrace stackTrace;
    public Span withStackTrace(StackTrace stackTrace) {
        this.stackTrace = stackTrace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Span withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public Span withStatus(Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeEvents")
    public TimeEvents timeEvents;
    public Span withTimeEvents(TimeEvents timeEvents) {
        this.timeEvents = timeEvents;
        return this;
    }
}