package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ToolExitCode
 * Exit code from a tool execution.
**/
public class ToolExitCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Integer number;
    public ToolExitCode withNumber(Integer number) {
        this.number = number;
        return this;
    }
}