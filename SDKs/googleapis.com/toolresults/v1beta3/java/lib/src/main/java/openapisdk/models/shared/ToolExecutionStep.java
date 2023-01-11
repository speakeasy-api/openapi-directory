package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ToolExecutionStep
 * Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
**/
public class ToolExecutionStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolExecution")
    public ToolExecution toolExecution;
    public ToolExecutionStep withToolExecution(ToolExecution toolExecution) {
        this.toolExecution = toolExecution;
        return this;
    }
}