package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pipeline
 * Specifies a series of actions to execute, expressed as Docker containers.
**/
public class Pipeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public Action[] actions;
    public Pipeline withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedEnvironment")
    public Secret encryptedEnvironment;
    public Pipeline withEncryptedEnvironment(Secret encryptedEnvironment) {
        this.encryptedEnvironment = encryptedEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public java.util.Map<String, String> environment;
    public Pipeline withEnvironment(java.util.Map<String, String> environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public Resources resources;
    public Pipeline withResources(Resources resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public Pipeline withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}