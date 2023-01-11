package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackfillJob
 * Represents a backfill job on a specific stream object.
**/
public class BackfillJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public BackfillJob withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEndTime")
    public String lastEndTime;
    public BackfillJob withLastEndTime(String lastEndTime) {
        this.lastEndTime = lastEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastStartTime")
    public String lastStartTime;
    public BackfillJob withLastStartTime(String lastStartTime) {
        this.lastStartTime = lastStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public BackfillJobStateEnum state;
    public BackfillJob withState(BackfillJobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger")
    public BackfillJobTriggerEnum trigger;
    public BackfillJob withTrigger(BackfillJobTriggerEnum trigger) {
        this.trigger = trigger;
        return this;
    }
}