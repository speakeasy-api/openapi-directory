package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeInitializationAction
 * Specifies an executable to run on a fully configured node and a timeout period for executable completion.
**/
public class NodeInitializationAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executableFile")
    public String executableFile;
    public NodeInitializationAction withExecutableFile(String executableFile) {
        this.executableFile = executableFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionTimeout")
    public String executionTimeout;
    public NodeInitializationAction withExecutionTimeout(String executionTimeout) {
        this.executionTimeout = executionTimeout;
        return this;
    }
}