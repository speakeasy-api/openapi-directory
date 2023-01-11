package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionInput
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
**/
public class ExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("argument")
    public String argument;
    public ExecutionInput withArgument(String argument) {
        this.argument = argument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callLogLevel")
    public ExecutionCallLogLevelEnum callLogLevel;
    public ExecutionInput withCallLogLevel(ExecutionCallLogLevelEnum callLogLevel) {
        this.callLogLevel = callLogLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public ExecutionInput withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public ExecutionInput withStatus(Status status) {
        this.status = status;
        return this;
    }
}