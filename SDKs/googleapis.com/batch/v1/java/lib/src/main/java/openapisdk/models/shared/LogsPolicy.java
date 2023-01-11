package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogsPolicy
 * LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
**/
public class LogsPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public LogsPolicyDestinationEnum destination;
    public LogsPolicy withDestination(LogsPolicyDestinationEnum destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logsPath")
    public String logsPath;
    public LogsPolicy withLogsPath(String logsPath) {
        this.logsPath = logsPath;
        return this;
    }
}