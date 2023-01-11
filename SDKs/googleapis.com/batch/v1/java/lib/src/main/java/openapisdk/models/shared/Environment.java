package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Environment
 * An Environment describes a collection of environment variables to set when executing Tasks.
**/
public class Environment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variables")
    public java.util.Map<String, String> variables;
    public Environment withVariables(java.util.Map<String, String> variables) {
        this.variables = variables;
        return this;
    }
}