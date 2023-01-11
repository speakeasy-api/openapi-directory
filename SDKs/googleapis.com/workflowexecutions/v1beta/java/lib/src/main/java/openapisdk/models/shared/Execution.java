package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Execution
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
**/
public class Execution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("argument")
    public String argument;
    public Execution withArgument(String argument) {
        this.argument = argument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callLogLevel")
    public ExecutionCallLogLevelEnum callLogLevel;
    public Execution withCallLogLevel(ExecutionCallLogLevelEnum callLogLevel) {
        this.callLogLevel = callLogLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Execution withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public Execution withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Execution withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public Execution withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Execution withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ExecutionStateEnum state;
    public Execution withState(ExecutionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public Execution withStatus(Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowRevisionId")
    public String workflowRevisionId;
    public Execution withWorkflowRevisionId(String workflowRevisionId) {
        this.workflowRevisionId = workflowRevisionId;
        return this;
    }
}