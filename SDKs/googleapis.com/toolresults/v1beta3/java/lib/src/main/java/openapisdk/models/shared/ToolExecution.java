package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ToolExecution
 * An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
**/
public class ToolExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commandLineArguments")
    public String[] commandLineArguments;
    public ToolExecution withCommandLineArguments(String[] commandLineArguments) {
        this.commandLineArguments = commandLineArguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCode")
    public ToolExitCode exitCode;
    public ToolExecution withExitCode(ToolExitCode exitCode) {
        this.exitCode = exitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolLogs")
    public FileReference[] toolLogs;
    public ToolExecution withToolLogs(FileReference[] toolLogs) {
        this.toolLogs = toolLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolOutputs")
    public ToolOutputReference[] toolOutputs;
    public ToolExecution withToolOutputs(ToolOutputReference[] toolOutputs) {
        this.toolOutputs = toolOutputs;
        return this;
    }
}