package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FunctionInput
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.
**/
public class FunctionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildConfig")
    public BuildConfigInput buildConfig;
    public FunctionInput withBuildConfig(BuildConfigInput buildConfig) {
        this.buildConfig = buildConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FunctionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public FunctionEnvironmentEnum environment;
    public FunctionInput withEnvironment(FunctionEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTrigger")
    public EventTriggerInput eventTrigger;
    public FunctionInput withEventTrigger(EventTriggerInput eventTrigger) {
        this.eventTrigger = eventTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public FunctionInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FunctionInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfig")
    public ServiceConfigInput serviceConfig;
    public FunctionInput withServiceConfig(ServiceConfigInput serviceConfig) {
        this.serviceConfig = serviceConfig;
        return this;
    }
}