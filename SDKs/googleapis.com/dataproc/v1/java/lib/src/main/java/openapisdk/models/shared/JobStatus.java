package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobStatus
 * Dataproc job status.
**/
public class JobStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public JobStatus withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public JobStatusStateEnum state;
    public JobStatus withState(JobStatusStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateStartTime")
    public String stateStartTime;
    public JobStatus withStateStartTime(String stateStartTime) {
        this.stateStartTime = stateStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("substate")
    public JobStatusSubstateEnum substate;
    public JobStatus withSubstate(JobStatusSubstateEnum substate) {
        this.substate = substate;
        return this;
    }
}