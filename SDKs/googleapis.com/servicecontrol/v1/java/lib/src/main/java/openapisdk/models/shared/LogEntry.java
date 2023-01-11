package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogEntry
 * An individual log entry.
**/
public class LogEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRequest")
    public HttpRequest httpRequest;
    public LogEntry withHttpRequest(HttpRequest httpRequest) {
        this.httpRequest = httpRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertId")
    public String insertId;
    public LogEntry withInsertId(String insertId) {
        this.insertId = insertId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public LogEntry withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LogEntry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public LogEntryOperation operation;
    public LogEntry withOperation(LogEntryOperation operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protoPayload")
    public java.util.Map<String, Object> protoPayload;
    public LogEntry withProtoPayload(java.util.Map<String, Object> protoPayload) {
        this.protoPayload = protoPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public LogEntrySeverityEnum severity;
    public LogEntry withSeverity(LogEntrySeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceLocation")
    public LogEntrySourceLocation sourceLocation;
    public LogEntry withSourceLocation(LogEntrySourceLocation sourceLocation) {
        this.sourceLocation = sourceLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structPayload")
    public java.util.Map<String, Object> structPayload;
    public LogEntry withStructPayload(java.util.Map<String, Object> structPayload) {
        this.structPayload = structPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textPayload")
    public String textPayload;
    public LogEntry withTextPayload(String textPayload) {
        this.textPayload = textPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public LogEntry withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trace")
    public String trace;
    public LogEntry withTrace(String trace) {
        this.trace = trace;
        return this;
    }
}