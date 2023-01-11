package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SshScript
 * Response message for 'GenerateSshScript' request.
**/
public class SshScript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public SshScript withScript(String script) {
        this.script = script;
        return this;
    }
}