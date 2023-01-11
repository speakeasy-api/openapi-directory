package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareRecipeStepRunScript
 * Runs a script through an interpreter.
**/
public class SoftwareRecipeStepRunScript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedExitCodes")
    public Integer[] allowedExitCodes;
    public SoftwareRecipeStepRunScript withAllowedExitCodes(Integer[] allowedExitCodes) {
        this.allowedExitCodes = allowedExitCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interpreter")
    public SoftwareRecipeStepRunScriptInterpreterEnum interpreter;
    public SoftwareRecipeStepRunScript withInterpreter(SoftwareRecipeStepRunScriptInterpreterEnum interpreter) {
        this.interpreter = interpreter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public SoftwareRecipeStepRunScript withScript(String script) {
        this.script = script;
        return this;
    }
}