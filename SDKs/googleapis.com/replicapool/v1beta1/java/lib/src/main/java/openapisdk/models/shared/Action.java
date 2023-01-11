package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * An action that gets executed during initialization of the replicas.
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands")
    public String[] commands;
    public Action withCommands(String[] commands) {
        this.commands = commands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envVariables")
    public EnvVariable[] envVariables;
    public Action withEnvVariables(EnvVariable[] envVariables) {
        this.envVariables = envVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutMilliSeconds")
    public Integer timeoutMilliSeconds;
    public Action withTimeoutMilliSeconds(Integer timeoutMilliSeconds) {
        this.timeoutMilliSeconds = timeoutMilliSeconds;
        return this;
    }
}