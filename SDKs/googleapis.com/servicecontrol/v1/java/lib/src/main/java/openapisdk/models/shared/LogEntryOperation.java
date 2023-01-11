package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogEntryOperation
 * Additional information about a potentially long-running operation with which a log entry is associated.
**/
public class LogEntryOperation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public Boolean first;
    public LogEntryOperation withFirst(Boolean first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LogEntryOperation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public Boolean last;
    public LogEntryOperation withLast(Boolean last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("producer")
    public String producer;
    public LogEntryOperation withProducer(String producer) {
        this.producer = producer;
        return this;
    }
}