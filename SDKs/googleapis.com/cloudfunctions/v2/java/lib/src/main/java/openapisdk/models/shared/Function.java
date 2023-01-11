package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Function
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
public class Function {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildConfig")
    public BuildConfig buildConfig;
    public Function withBuildConfig(BuildConfig buildConfig) {
        this.buildConfig = buildConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Function withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public FunctionEnvironmentEnum environment;
    public Function withEnvironment(FunctionEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTrigger")
    public EventTrigger eventTrigger;
    public Function withEventTrigger(EventTrigger eventTrigger) {
        this.eventTrigger = eventTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Function withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Function withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfig")
    public ServiceConfig serviceConfig;
    public Function withServiceConfig(ServiceConfig serviceConfig) {
        this.serviceConfig = serviceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FunctionStateEnum state;
    public Function withState(FunctionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMessages")
    public GoogleCloudFunctionsV2StateMessage[] stateMessages;
    public Function withStateMessages(GoogleCloudFunctionsV2StateMessage[] stateMessages) {
        this.stateMessages = stateMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Function withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}