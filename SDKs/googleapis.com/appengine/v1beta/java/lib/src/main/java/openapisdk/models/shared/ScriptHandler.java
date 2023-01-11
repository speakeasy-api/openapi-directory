package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScriptHandler
 * Executes a script to handle the request that matches the URL pattern.
**/
public class ScriptHandler {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptPath")
    public String scriptPath;
    public ScriptHandler withScriptPath(String scriptPath) {
        this.scriptPath = scriptPath;
        return this;
    }
}