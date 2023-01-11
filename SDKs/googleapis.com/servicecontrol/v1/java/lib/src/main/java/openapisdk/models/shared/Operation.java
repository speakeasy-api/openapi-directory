package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Operation
 * Represents information regarding an operation.
**/
public class Operation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerId")
    public String consumerId;
    public Operation withConsumerId(String consumerId) {
        this.consumerId = consumerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Operation withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importance")
    public OperationImportanceEnum importance;
    public Operation withImportance(OperationImportanceEnum importance) {
        this.importance = importance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Operation withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logEntries")
    public LogEntry[] logEntries;
    public Operation withLogEntries(LogEntry[] logEntries) {
        this.logEntries = logEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricValueSets")
    public MetricValueSet[] metricValueSets;
    public Operation withMetricValueSets(MetricValueSet[] metricValueSets) {
        this.metricValueSets = metricValueSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public Operation withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationName")
    public String operationName;
    public Operation withOperationName(String operationName) {
        this.operationName = operationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaProperties")
    public QuotaProperties quotaProperties;
    public Operation withQuotaProperties(QuotaProperties quotaProperties) {
        this.quotaProperties = quotaProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public ResourceInfo[] resources;
    public Operation withResources(ResourceInfo[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Operation withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traceSpans")
    public TraceSpan[] traceSpans;
    public Operation withTraceSpans(TraceSpan[] traceSpans) {
        this.traceSpans = traceSpans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public Operation withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
}