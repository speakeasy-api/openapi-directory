package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecAction
 * Not supported by Cloud Run. ExecAction describes a "run in container" action.
**/
public class ExecAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String[] command;
    public ExecAction withCommand(String[] command) {
        this.command = command;
        return this;
    }
}