package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceExecResourceExec
 * A file or script to execute.
**/
public class OsPolicyResourceExecResourceExec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public OsPolicyResourceExecResourceExec withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public OsPolicyResourceFile file;
    public OsPolicyResourceExecResourceExec withFile(OsPolicyResourceFile file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpreter")
    public OsPolicyResourceExecResourceExecInterpreterEnum interpreter;
    public OsPolicyResourceExecResourceExec withInterpreter(OsPolicyResourceExecResourceExecInterpreterEnum interpreter) {
        this.interpreter = interpreter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputFilePath")
    public String outputFilePath;
    public OsPolicyResourceExecResourceExec withOutputFilePath(String outputFilePath) {
        this.outputFilePath = outputFilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public OsPolicyResourceExecResourceExec withScript(String script) {
        this.script = script;
        return this;
    }
}