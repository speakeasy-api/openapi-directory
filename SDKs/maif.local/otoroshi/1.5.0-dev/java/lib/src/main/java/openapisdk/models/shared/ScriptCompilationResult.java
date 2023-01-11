package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScriptCompilationResult
 * The result of the compilation of a Script
**/
public class ScriptCompilationResult {
    @JsonProperty("done")
    public Boolean done;
    public ScriptCompilationResult withDone(Boolean done) {
        this.done = done;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ScriptCompilationError error;
    public ScriptCompilationResult withError(ScriptCompilationError error) {
        this.error = error;
        return this;
    }
}