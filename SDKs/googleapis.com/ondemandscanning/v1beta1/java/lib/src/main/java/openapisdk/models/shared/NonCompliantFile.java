package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NonCompliantFile
 * Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'.
**/
public class NonCompliantFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayCommand")
    public String displayCommand;
    public NonCompliantFile withDisplayCommand(String displayCommand) {
        this.displayCommand = displayCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public NonCompliantFile withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public NonCompliantFile withReason(String reason) {
        this.reason = reason;
        return this;
    }
}