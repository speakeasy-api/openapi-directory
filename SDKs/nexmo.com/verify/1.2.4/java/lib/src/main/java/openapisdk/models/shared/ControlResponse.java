package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ControlResponse
 * Success
**/
public class ControlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public ControlResponseCommandEnum command;
    public ControlResponse withCommand(ControlResponseCommandEnum command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ControlResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}