package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecStepConfig
 * Common configurations for an ExecStep.
**/
public class ExecStepConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedSuccessCodes")
    public Integer[] allowedSuccessCodes;
    public ExecStepConfig withAllowedSuccessCodes(Integer[] allowedSuccessCodes) {
        this.allowedSuccessCodes = allowedSuccessCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsObject")
    public GcsObject gcsObject;
    public ExecStepConfig withGcsObject(GcsObject gcsObject) {
        this.gcsObject = gcsObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpreter")
    public ExecStepConfigInterpreterEnum interpreter;
    public ExecStepConfig withInterpreter(ExecStepConfigInterpreterEnum interpreter) {
        this.interpreter = interpreter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPath")
    public String localPath;
    public ExecStepConfig withLocalPath(String localPath) {
        this.localPath = localPath;
        return this;
    }
}